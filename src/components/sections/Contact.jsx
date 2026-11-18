import { useState } from 'react'
import { Mail, Copy, Check, FileText } from 'lucide-react'
import personal from '../../data/personal.js'
import { isContactConfigured } from '../../services/contactService.js'
import useContactForm from '../../hooks/useContactForm.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import SocialLinks from '../common/SocialLinks.jsx'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'

const inputCls =
  'mt-1.5 w-full rounded-lg border bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 disabled:opacity-60'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm()
  const loading = status === 'loading'
  const [copied, setCopied] = useState(false)

  // Copies the email address. If the browser blocks clipboard access nothing breaks; the mailto link still works.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const props = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    disabled: loading || !isContactConfigured,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `${inputCls} ${errors[name] ? 'border-danger' : 'border-field'}`,
  })

  return (
    <Section id="contact" alt>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading note="say hello" title="Let’s talk." description="Have a role, an internship or a project in mind? I’d like to hear about it." />
          <a href={`mailto:${personal.email}`} className="inline-flex max-w-full items-center gap-3 break-all text-ink underline-offset-4 transition-colors hover:text-accent hover:underline">
            <Mail size={20} className="text-accent" aria-hidden="true" />
            {personal.email}
          </a>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="sr-only" role="status">{copied ? 'Email address copied' : ''}</span>
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                <FileText size={16} aria-hidden="true" />
                View CV online
              </a>
            )}
          </div>
          <SocialLinks skipEmail withLabels className="mt-3" />
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="surface-card relative min-w-0 space-y-4">
            <Field id="name" label="Full name" error={errors.name}>
              <input type="text" autoComplete="name" {...props('name')} />
            </Field>
            <Field id="email" label="Email address" error={errors.email}>
              <input type="email" autoComplete="email" {...props('email')} />
            </Field>
            <Field id="subject" label="Subject" error={errors.subject}>
              <input type="text" {...props('subject')} />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea rows={5} {...props('message')} />
            </Field>

            {/* Honeypot: hidden from people and screen readers, bots tend to fill it. */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
            </div>

            <Button type="submit" disabled={loading || !isContactConfigured} className="w-full sm:w-auto">
              {loading ? 'Sending…' : 'Send message'}
            </Button>

            <div aria-live="polite">
              {status === 'success' && (
                <p role="status" className="text-success">Thanks! Your message was sent. I’ll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-danger">
                  Something went wrong. Please try again, or email me at {personal.email}.
                </p>
              )}
              {!isContactConfigured && (
                <p className="text-sm text-muted">
                  The form isn’t switched on yet. Please use the email address for now.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
