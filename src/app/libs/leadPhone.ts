export function isValidLeadPhone(value: string) {
  const phone = value.trim();
  const digits = phone.replace(/\D/g, "").length;
  return /^\+?[\d\s().-]+$/.test(phone) && digits >= 9 && digits <= 15;
}
