import MaintanceContent from '#/templates/MaintanceContent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <MaintanceContent />
}
