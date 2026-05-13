import { createFileRoute } from '@tanstack/react-router'
import MaintanceContent from '@/pages/MaintanceContent'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <MaintanceContent />
}
