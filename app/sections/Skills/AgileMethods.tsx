import { useInView } from 'framer-motion'
import { Kanban, Target, Timer } from 'lucide-react'
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
    name: 'Google-OKRs',
    icon: Target,
    description:
      'Ich begleite Teams bei der Definition und Umsetzung von Objectives and Key Results',
    benefits: [
      'Formuliere klare, messbare Ziele mit Teams',
      'Sichere die Ausrichtung aller Stakeholder auf gemeinsame Ziele',
      'Führe regelmäßige OKR-Reviews und Anpassungen durch',
    ],
  },
  {
    name: 'Kanban',
    icon: Kanban,
    description:
      'Ich implementiere und optimiere Kanban-Boards für effizientes Workflow-Management',
    benefits: [
      'Gestalte übersichtliche Kanban-Boards für maximale Transparenz',
      'Identifiziere und behebe Engpässe im Entwicklungsprozess',
      'Führe Teams bei der Priorisierung und dem Workflow-Management',
    ],
  },
  {
    name: 'SCRUM',
    icon: Timer,
    description:
      'Ich unterstütze Teams bei der Implementierung und Durchführung von SCRUM-Prozessen für effektives Projektmanagement',
    benefits: [
      'Führe Teams durch Sprint-Planung und Retrospektiven',
      'Sichere transparente Kommunikation und regelmäßige Fortschrittsberichte',
      'Stelle kontinuierliche Lieferung von funktionierenden Ergebnissen sicher',
    ],
  },
  // {
  //   name: 'Lean',
  //   icon: Sparkles,
  //   description:
  //     'Ich optimiere Entwicklungsprozesse nach Lean-Prinzipien für maximale Effizienz',
  //   benefits: [
  //     'Analysiere und verbessere bestehende Arbeitsprozesse',
  //     'Reduziere Verschwendung in der Softwareentwicklung',
  //     'Fokussiere Teams auf wertschöpfende Aktivitäten',
  //   ],
  // },
  // {
  //   name: 'Design-Sprint',
  //   icon: Lightbulb,
  //   description:
  //     'Ich moderiere Design Sprints zur schnellen Lösung komplexer Herausforderungen',
  //   benefits: [
  //     'Leite Teams durch den fünftägigen Design-Sprint-Prozess',
  //     'Integriere Nutzerfeedback frühzeitig in die Entwicklung',
  //     'Fördere schnelle Entscheidungsfindung und Innovation',
  //   ],
  // },
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
      className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-cols-3"
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
