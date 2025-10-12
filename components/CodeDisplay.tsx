"use client"

import { useTheme } from "./theme-provider"
import { useState, useEffect } from "react"

interface CodeDisplayProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export default function CodeDisplay({ code, language = "typescript", showLineNumbers = true }: CodeDisplayProps) {
  const { theme } = useTheme()
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    setLines(code.split("\n"))
  }, [code])

  return (
    <div
      className={`rounded-lg overflow-hidden font-mono text-sm ${theme === "dark" ? "bg-[#1E1E1E] text-gray-300" : "bg-[#f5f5f5] text-gray-800"}`}
    >
      <div className="p-2 flex justify-between items-center border-b border-gray-700">
        <span className="font-mono">RoleCycler.tsx</span>
        <span className="text-xs opacity-70">{language}</span>
      </div>
      <div className="p-4 overflow-auto max-h-[500px]">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="leading-relaxed">
                {showLineNumbers && (
                  <td className="pr-4 text-right select-none opacity-50 border-r border-gray-700">{i + 1}</td>
                )}
                <td className="pl-4 whitespace-pre">{line || " "}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
