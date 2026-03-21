export function toWhatsAppPhone(input: string, defaultCountryCode = "91") {
  const digitsOnly = input.replace(/\D/g, "")
  if (!digitsOnly) return ""

  // If it's a typical local 10-digit number (India), prepend country code.
  if (digitsOnly.length === 10) return `${defaultCountryCode}${digitsOnly}`

  // If it starts with a leading 0 (e.g., 0XXXXXXXXXX), normalize.
  if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    return `${defaultCountryCode}${digitsOnly.slice(1)}`
  }

  return digitsOnly
}

export function getWhatsAppUrl({
  phone,
  text,
  defaultCountryCode = "91",
}: {
  phone: string
  text?: string
  defaultCountryCode?: string
}) {
  const normalized = toWhatsAppPhone(phone, defaultCountryCode)
  const base = `https://wa.me/${normalized}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}

