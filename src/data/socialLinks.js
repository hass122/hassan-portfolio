import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import personal from './personal.js'

// Only links with a real value are returned; empty ones stay hidden everywhere.
const socialLinks = [
  { label: 'Email', href: personal.email && `mailto:${personal.email}`, text: personal.email, Icon: Mail },
  { label: 'GitHub', href: personal.github, text: 'GitHub', Icon: Github },
  { label: 'LinkedIn', href: personal.linkedin, text: 'LinkedIn', Icon: Linkedin },
  { label: 'WhatsApp', href: personal.whatsapp, text: 'WhatsApp', Icon: MessageCircle },
].filter((i) => i.href)

export default socialLinks
