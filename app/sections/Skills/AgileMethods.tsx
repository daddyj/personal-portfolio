import { motion, useInView } from 'framer-motion'
import { Kanban, Lightbulb, Sparkles, Target, Timer } from 'lucide-react'
import { useRef } from 'react'

interface AgileMethod {
  name: string
  icon: React.ReactNode
  description: string
  benefits: string[]
}

const agileMethods: AgileMethod[] = [
  {
    name: 'Google-OKRs',
    icon: <Target className="h-8 w-8" />,
    description:
      'Zielsetzungs-Framework zur Definition und Verfolgung von Zielen',
    benefits: [
      'Klar definierte und messbare Ziele',
      'Ausrichtung aller Teams auf gemeinsame Ziele',
      'Regelmäßige Überprüfung und Anpassung',
    ],
  },
  {
    name: 'Kanban',
    icon: <Kanban className="h-8 w-8" />,
    description: 'Visuelles Workflow-Management-System',
    benefits: [
      'Übersichtliche Darstellung aller Aufgaben',
      'Schnelle Identifikation von Engpässen',
      'Flexible Priorisierung von Aufgaben',
    ],
  },
  {
    name: 'SCRUM',
    icon: <Timer className="h-8 w-8" />,
    description:
      'Iterativer Ansatz für Projektmanagement und Softwareentwicklung',
    benefits: [
      'Schnelle Anpassung an neue Anforderungen',
      'Transparente Projektfortschritte',
      'Regelmäßige Lieferung von Ergebnissen',
    ],
  },
  {
    name: 'Lean',
    icon: <Sparkles className="h-8 w-8" />,
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
    icon: <Lightbulb className="h-8 w-8" />,
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
    once: false, // This allows the animation to replay when scrolling back up
    margin: '-100px 0px', // Starts animation slightly before the section comes into view
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {agileMethods.map((method) => (
        <motion.div
          key={method.name}
          variants={itemVariants}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600 transition-colors group-hover:bg-blue-200 group-hover:text-blue-500 dark:bg-blue-900 dark:text-blue-300">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold">{method.name}</h3>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {method.description}
          </p>
          <ul className="space-y-2">
            {method.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}
