// Contact form provider: Formspree. Only a public form endpoint is used (no secret keys in the frontend).
// Set VITE_FORMSPREE_ENDPOINT in .env (see .env.example).
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

export const isContactConfigured = Boolean(endpoint)

export async function sendContactMessage({ name, email, subject, message, website }) {
  if (!endpoint) throw new Error('Contact form is not configured.')
  // `website` is a hidden honeypot field; real visitors leave it empty.
  if (website) return { ok: true }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() }),
  })
  if (!res.ok) throw new Error('Request failed.')
  return { ok: true }
}
