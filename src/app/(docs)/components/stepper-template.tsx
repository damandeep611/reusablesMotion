"use client"

import React from "react"
import { Check, CopyIcon } from "lucide-react"

type Step = {
  title: string
  description: string
  code?: string
}

type StepperProps = {
  steps: Step[]
  currentStep?: number
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep = 0 }) => {
  const [copied, setCopied] = React.useState<number | null>(null)

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text)
    setCopied(stepIndex)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="my-8">
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="flex items-start">
              {/* Step indicator */}
              <div className="relative flex flex-col items-center mr-4">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full z-10 ${
                    index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index < currentStep ? <Check className="w-5 h-5" /> : <span>{index + 1}</span>}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-8 w-0.5 h-full ${index < currentStep ? "bg-blue-600" : "bg-gray-200"}`}
                  />
                )}
              </div>

              {/* Step content */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>

                {step.code && (
                  <div className="relative">
                    <div className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm font-mono">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                    <button
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                      onClick={() => copyToClipboard(step.code || "", index)}
                    >
                      {copied === index ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <CopyIcon className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

