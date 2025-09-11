'use client'

import { useRouter } from 'next/navigation'

export default function Impressum() {
  const router = useRouter()
  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-8">
        <div
          onClick={handleGoBack}
          className="text-blue-600 transition-colors hover:cursor-pointer hover:text-blue-800"
        >
          Zurück zur Startseite
        </div>
        <h1 className="mb-8 text-4xl font-bold sm:text-center">Impressum</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Acun Gürsoy</h2>
            <p className="text-gray-600">Freiberuflicher Softwareentwickler</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Anschrift</h2>
            <p className="text-gray-600">
              Mauerstrasse 40
              <br />
              57334 Bad Laasphe
              <br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <div className="text-gray-600">
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:acun.guersoy@gmail.com"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  acun.guersoy@gmail.com
                </a>
              </p>
              <p>
                Telefon:{' '}
                <a
                  href="tel:+4915258517763"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  +49 152 58517763
                </a>
              </p>
            </div>
          </div>

          <p className="border-t pt-8 text-sm text-gray-500">
            Das Impressum ist auf allen Seiten über den Link
            &quot;Impressum&quot; in der Top Navigation erreichbar.
          </p>
        </div>
      </div>
    </div>
  )
}
