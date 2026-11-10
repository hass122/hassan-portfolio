import { useState } from 'react'
import { validateContact } from '../utils/validation.js'
import { sendContactMessage } from '../services/contactService.js'

const empty = { name: '', email: '', subject: '', message: '', website: '' }

export default function useContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return // prevent duplicate submissions
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('loading')
    try {
      await sendContactMessage(values)
      setValues(empty)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { values, errors, status, handleChange, handleSubmit }
}
