import { useInView } from 'framer-motion'
import { Kanban, Lightbulb, Sparkles, Target, Timer } from 'lucide-react'
import { useRef } from 'react'

import { Card } from '@/app/components/Card'

interface AgileMethod {
  name: string
  icon: typeof Timer
  description: string
  benefits: string[]
}

const agileMethods: AgileMethod[] = [
  {
    name: 'SCRUM',
    icon: Timer,
    description:
      'Iterativer Ansatz für Projektmanagement und Softwareentwicklung',
    benefits: [
      'Schnelle Anpassung an neue Anforderungen',
      'Transparente Projektfortschritte',
      'Regelmäßige Lieferung von Ergebnissen',
    ],
  },
  {
    name: 'Kanban',
    icon: Kanban,
    description: 'Visuelles Workflow-Management-System',
    benefits: [
      'Übersichtliche Darstellung aller Aufgaben',
      'Schnelle Identifikation von Engpässen',
      'Flexible Priorisierung von Aufgaben',
    ],
  },
  {
    name: 'Google-OKRs',
    icon: Target,
    description:
      'Zielsetzungs-Framework zur Definition und Verfolgung von Zielen',
    benefits: [
      'Klar definierte und messbare Ziele',
      'Ausrichtung aller Teams auf gemeinsame Ziele',
      'Regelmäßige Überprüfung und Anpassung',
    ],
  },
  {
    name: 'Lean',
    icon: Sparkles,
    description:
      'Methodik zur Wertmaximierung bei gleichzeitiger Minimierung von Verschwendung',
    benefits: [
      'Optimierung von Arbeitsprozessen',
      'Reduzierung von Zeit- und Ressourcenverschwendung',
      'Fokus auf wertschöpfende Aktivitäten',
    ],
  },
  {
    name: 'Design-Sprint',
    icon: Lightbulb,
    description: 'Fünftägiger Prozess zur Lösung kritischer Geschäftsprobleme',
    benefits: [
      'Schnelle Entwicklung von Lösungsansätzen',
      'Frühe Einbindung von Nutzerfeedback',
      'Rasche Entscheidungsfindung im Team',
    ],
  },
]

export const AgileMethods = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '-100px 0px',
  })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {agileMethods.map((method, index) => (
        <Card
          key={method.name}
          icon={method.icon}
          title={method.name}
          delay={index * 0.2}
          isInView={isInView}
        >
          <p className="mb-4">{method.description}</p>
          <ul className="space-y-2">
            {method.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
