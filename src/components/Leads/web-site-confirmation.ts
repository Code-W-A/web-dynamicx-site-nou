// No contact information is stored. A marker is created only after API success.
const pendingKey = "wd_web_site_conversion_pending_v1";

export const webSiteSuccessMessage =
  "Cererea ta a fost trimisă. Revenim pe datele de contact oferite pentru a discuta proiectul.";

export function markWebSiteSubmission() {
  try {
    sessionStorage.setItem(pendingKey, "1");
  } catch {
    // Storage restrictions must never prevent the success confirmation.
  }
}

export function consumeWebSiteSubmission(): boolean {
  try {
    const pending = sessionStorage.getItem(pendingKey) === "1";
    sessionStorage.removeItem(pendingKey);
    return pending;
  } catch {
    // Prefer a missed measurement to a duplicate conversion.
    return false;
  }
}
