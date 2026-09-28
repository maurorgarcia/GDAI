export const WHATSAPP_NUMBER = '5493364294964';

export function whatsappHref(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
