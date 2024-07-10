"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">Chatbot UI</div>

      <div
        className="mt-4 flex w-[200px] cursor-pointer items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        onClick={() => (window.location.href = "/login")}
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </div>
    </div>
  )
}
