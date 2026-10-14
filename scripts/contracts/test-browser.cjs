// Start the demo emulators and demo Next.js server before running this script.
const { chromium, expect } = require("@playwright/test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
async function main() {
  const origin = process.env.CONTRACTS_TEST_ORIGIN || "http://localhost:3100";
  const config = await (await fetch(`${origin}/api/contracte/config`)).json();
  assert.equal(
    config.projectId,
    "demo-contracte",
    "Refusing browser test against a real Firebase project",
  );
  assert.ok(config.emulator);
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
    headless: true,
  });
  const errors = [],
    requests = [];
  const adminContext = await browser.newContext({
    viewport: { width: 1365, height: 900 },
  });
  const clientContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  function observe(page) {
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("request", (r) => requests.push(r.url()));
  }
  const admin = await adminContext.newPage();
  observe(admin);
  async function draw(page, label) {
    await expect(page.getByRole("group", { name: label })).toBeEnabled();
    const svg = page.getByRole("group", { name: label }).locator("svg");
    await svg.scrollIntoViewIfNeeded();
    const box = await svg.boundingBox();
    assert.ok(box);
    await page.mouse.move(box.x + box.width * 0.15, box.y + box.height * 0.4);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.4, box.y + box.height * 0.65, {
      steps: 12,
    });
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.2, {
      steps: 12,
    });
    await page.mouse.up();
  }
  try {
    await admin.goto(`${origin}/contracte/admin`);
    await admin
      .getByLabel("Email", { exact: true })
      .fill("admin-browser@example.test");
    await admin
      .getByLabel("Parolă", { exact: true })
      .fill("LocalBrowserOnly123!");
    await admin.getByRole("button", { name: "Intră în administrare" }).click();
    await expect(
      admin.getByRole("button", { name: "Contract nou", exact: true }),
    ).toBeVisible();
    await admin
      .getByRole("button", { name: "Date prestator", exact: true })
      .click();
    for (const [label, value] of Object.entries({
      "Denumire firmă": "Prestator Browser TEST",
      CUI: "TEST111",
      "Adresă sediu": "Adresă de test",
      "Reprezentant legal": "Reprezentant Test",
      Email: "provider@example.test",
    }))
      await admin.getByLabel(label, { exact: true }).fill(value);
    await admin
      .getByRole("button", { name: "Salvează datele", exact: true })
      .click();
    await expect(admin.getByRole("status")).toContainText("salvate");
    await admin.getByRole("button", { name: "Șabloane", exact: true }).click();
    await admin
      .getByLabel("Nume șablon", { exact: true })
      .fill("Șablon Browser TEST");
    await admin
      .getByLabel("Textul contractului", { exact: true })
      .fill(
        "EXCLUSIV TEST — fără efect contractual\nContract {{number}}, {{date}}\nPrestator: {{provider.name}}, {{provider.taxId}}, {{provider.address}}, {{provider.representative}}, {{provider.email}}\nClient: {{client.name}}, {{client.taxId}}, {{client.address}}, {{client.representative}}, {{client.email}}, {{client.phone}}\nServicii: {{service}}\nPreț: {{price}}\nDurată: {{duration}}",
      );
    await admin
      .getByRole("button", { name: "Salvează șablonul", exact: true })
      .click();
    await expect(admin.getByRole("status")).toContainText("Șablon salvat");
    await admin.getByRole("button", { name: "Contracte", exact: true }).click();
    await admin
      .getByRole("button", { name: "Contract nou", exact: true })
      .click();
    const number = `BROWSER-${Date.now()}`;
    for (const [label, value] of Object.entries({
      "Număr contract": number,
      "Preț și condiții de plată": "100 lei, exclusiv test",
      Durată: "30 zile",
      Servicii: "Verificare browser",
    }))
      await admin.getByLabel(label, { exact: true }).fill(value);
    await admin
      .getByRole("button", { name: "Salvează ciorna", exact: true })
      .click();
    await expect(
      admin.getByRole("group", { name: "Semnătura prestatorului" }),
    ).toBeVisible();
    await draw(admin, "Semnătura prestatorului");
    await admin
      .getByRole("button", {
        name: "Semnează și generează linkul",
        exact: true,
      })
      .click();
    const linkInput = admin.getByLabel("Link pentru client", { exact: true });
    await expect(linkInput).toBeVisible();
    const link = await linkInput.inputValue();
    console.log(
      "PASS: administrator login → provider → template → draft → signature → link",
    );
    const client = await clientContext.newPage();
    observe(client);
    const response = await client.goto(link);
    assert.match(response.headers()["x-robots-tag"], /noindex/);
    assert.match(response.headers()["cache-control"], /no-store/);
    await expect(
      client.getByLabel("Denumirea firmei", { exact: true }),
    ).toBeVisible();
    for (const [label, value] of Object.entries({
      "Denumirea firmei": "Client Browser TEST",
      Email: "client@example.test",
      CUI: "TEST222",
      "Reprezentant legal": "Client Test",
      "Adresa sediului": "Adresă client test",
      Telefon: "0700000000",
    }))
      await client.getByLabel(label, { exact: true }).fill(value);
    await client
      .getByRole("button", { name: "Verifică documentul complet", exact: true })
      .click();
    await expect(
      client.getByRole("heading", { name: "3. Semnează contractul" }),
    ).toBeVisible();
    const acceptance = client.getByRole("checkbox");
    await expect(acceptance).not.toBeChecked();
    await acceptance.check();
    await draw(client, "Semnătura clientului");
    const sign = client.getByRole("button", {
      name: "Semnează și finalizează",
      exact: true,
    });
    // The server saves successfully, but the user sees an error instead of that response.
    // A retry must preserve the form/signature and return the original signed record.
    await client.route(
      "**/api/contracte/public/*/sign",
      async (route) => {
        const saved = await route.fetch();
        assert.equal(saved.status(), 200);
        await route.fulfill({
          status: 503,
          contentType: "application/json",
          body: JSON.stringify({
            error: "Răspuns pierdut simulat. Reîncearcă.",
          }),
        });
      },
      { times: 1 },
    );
    await sign.click();
    await expect(client.locator("main [role=alert]")).toContainText(
      "Răspuns pierdut",
    );
    await expect(
      client.getByLabel("Denumirea firmei", { exact: true }),
    ).toHaveValue("Client Browser TEST");
    await expect(acceptance).toBeChecked();
    await expect(sign).toBeEnabled();
    await sign.click();
    await expect(
      client.getByRole("heading", { name: "Contract semnat", exact: true }),
    ).toBeVisible();
    await expect(
      client.getByText(
        "Contractul a fost semnat și salvat. Îl poți consulta mai jos.",
        { exact: true },
      ),
    ).toBeVisible();
    assert.equal(await client.locator(".signature-view").count(), 2);
    assert.ok(
      await client.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    );
    await client.screenshot({
      path: path.join(os.tmpdir(), "contracts-client-signed-mobile.png"),
      fullPage: true,
    });
    await client.reload();
    await expect(
      client.getByRole("heading", { name: "Contract semnat", exact: true }),
    ).toBeVisible();
    console.log(
      "PASS: mobile client data → preview → signature → lost response → safe retry → reload",
    );
    await admin.reload();
    await admin.getByLabel("Caută", { exact: true }).fill(number);
    const row = admin.getByRole("row").filter({ hasText: number });
    await expect(row).toContainText("Client Browser TEST");
    await expect(row).toContainText("Semnat");
    await row.getByRole("button", { name: "Deschide", exact: true }).click();
    await expect(admin.locator(".document .contract-text")).toContainText(
      "Client Browser TEST",
    );
    const [jsonDownload] = await Promise.all([
      admin.waitForEvent("download"),
      admin
        .getByRole("link", { name: "Export JSON complet", exact: true })
        .click(),
    ]);
    const exported = JSON.parse(
      await fs.readFile(await jsonDownload.path(), "utf8"),
    );
    assert.equal(exported.contract.status, "signed");
    assert.equal(exported.contract.acceptance.accepted, true);
    const [csvDownload] = await Promise.all([
      admin.waitForEvent("download"),
      admin
        .getByRole("link", { name: "Export CSV / Excel", exact: true })
        .click(),
    ]);
    assert.match(
      await fs.readFile(await csvDownload.path(), "utf8"),
      /Client Browser TEST/,
    );
    await admin.screenshot({
      path: path.join(os.tmpdir(), "contracts-admin-signed.png"),
      fullPage: true,
    });
    assert.equal(
      requests.filter((u) =>
        /googletagmanager\.com|google-analytics\.com/.test(u),
      ).length,
      0,
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: admin review → JSON evidence → Excel CSV; no tracking or browser errors",
    );
    console.log(
      "Browser flow passed. Screenshots saved in the system temporary directory.",
    );
  } finally {
    await browser.close();
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
