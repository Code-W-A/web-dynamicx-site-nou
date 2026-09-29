// Exercise the real contact handler with an in-memory email transport. No email is sent.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function loadRoute(fail = false) {
  const mail = [];
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const sandbox = {
      exports: {}, process: { env: {} },
      require(id) {
        if (id === "@/app/libs/email") return {
          sendEmail: async payload => {
            mail.push(payload);
            if (fail) throw new Error("Simulated SMTP failure");
          },
        };
        if (id === "@/app/libs/aiAutomationContact") return load("src/app/libs/aiAutomationContact.ts");
        if (id === "@/app/libs/leadPhone" || id === "./leadPhone") return load("src/app/libs/leadPhone.ts");
        return require(id);
      },
    };
    const source = ts.transpileModule(readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    vm.runInNewContext(source, sandbox);
    cache.set(file, sandbox.exports);
    return sandbox.exports;
  }
  const { POST } = load("src/app/api/contact/route.ts");
  return {
    mail,
    post: body => POST(new Request("http://localhost/api/contact", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
    })),
  };
}
const valid = {
  name: "Test local", company: "Firma demo", email: "test@example.test", phone: "",
  message: "Centralizăm manual solicitările din email.", consent: true,
  source: "service-ai-automation", page: "/servicii/automatizari-ai",
};
for (const [label, overrides] of [
  ["email only", {}],
  ["phone only", { email: "", phone: "+40 (712) 345-678" }],
  ["optional company omitted", { company: undefined }],
]) test(`accepts ${label} after simulated delivery without funnel cookies`, async () => {
  const { post, mail } = loadRoute();
  const res = await post({ ...valid, ...overrides });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
  assert.equal(mail.length, 1);
  assert.equal(res.headers.get("set-cookie"), null);
  assert.match(mail[0].html, /service-ai-automation/);
});

for (const [label, overrides] of [
  ["blank name", { name: " " }], ["name header injection", { name: "Test\r\nHeader" }],
  ["no contact", { phone: "", email: "" }], ["invalid email", { email: "test@" }],
  ["invalid phone", { email: "", phone: "123" }], ["oversized phone", { email: "", phone: "1".repeat(31) }],
  ["short message", { message: "Scurt" }], ["oversized message", { message: "x".repeat(5001) }],
  ["missing consent", { consent: undefined }], ["false consent", { consent: false }],
  ["incorrect source page", { page: "/contact" }], ["invalid name type", { name: {} }],
]) test(`rejects ${label} before email transport`, async () => {
  const { post, mail } = loadRoute();
  assert.equal((await post({ ...valid, ...overrides })).status, 400);
  assert.equal(mail.length, 0);
});

test("failed delivery does not report success", async () => {
  const { post } = loadRoute(true);
  const res = await post(valid);
  assert.equal(res.status, 500);
  assert.equal((await res.json()).ok, undefined);
});
test("user HTML is escaped in email", async () => {
  const { post, mail } = loadRoute();
  await post({ ...valid, message: "<script>alert('x')</script>" });
  assert.match(mail[0].html, /&lt;script&gt;/);
  assert.ok(!mail[0].html.includes("<script>"));
});
for (const source of ["lead-web-site", "lead-magazin-online", "lead-mobile-apps", "contact-generic"]) {
  test(`preserves valid ${source} requests`, async () => {
    const { post, mail } = loadRoute();
    const body = {
      name: "Test local", email: "test@example.test", phone: "+40712345678",
      message: "Un proiect digital de test.", source,
      ...(source === "lead-web-site" ? { page: "/leads/creare-site-web", description: "Un proiect digital de test." } : {}),
    };
    assert.equal((await post(body)).status, 200);
    assert.equal(mail.length, 1);
  });
}
