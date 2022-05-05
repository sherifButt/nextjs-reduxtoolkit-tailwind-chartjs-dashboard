import { CheckCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function Alert({ className,msg,error }) {
  const [alertToggle, setAlertToggle] = useState(true)

  return (
    alertToggle && (
      <div
        className={`rounded-md ${
          error ? 'bg-red-50' : 'bg-green-50'
        } p-4 shadow ${className}`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            {error ? (
              <XCircleIcon
                className={`h-5 w-5 ${
                  error ? 'text-red-400' : 'text-green-400'
                }`}
                aria-hidden="true"
              />
            ) : (
              <CheckCircleIcon
                className={`h-5 w-5 ${
                  error ? 'text-red-400' : 'text-green-400'
                }`}
                aria-hidden="true"
              />
            )}
          </div>
          <div className="ml-3">
            <p
              className={`text-sm font-medium ${
                error ? 'text-red-800' : 'text-green-800'
              }`}
            >
              {msg ? msg : `Successfully uploaded`}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`inline-flex rounded-md  p-1.5  focus:ring-2 focus:ring-offset-2 ${
                  error
                    ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:outline-none  focus:ring-red-600  focus:ring-offset-red-50'
                    : 'bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none  focus:ring-green-600  focus:ring-offset-green-50'
                }`}
                onClick={() => setAlertToggle(!alertToggle)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
