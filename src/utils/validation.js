const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Returns an object of error messages. Empty object means the form is valid.
export function validateContact({ name, email, subject, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  else if (name.trim().length < 2) errors.name = 'Name is too short.'

  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.'

  if (!subject.trim()) errors.subject = 'Please enter a subject.'
  else if (subject.trim().length < 3) errors.subject = 'Subject is too short.'

  if (!message.trim()) errors.message = 'Please write a message.'
  else if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  else if (message.length > 2000) errors.message = 'Message must be under 2000 characters.'

  return errors
}
