import React from "react"
import { redirect } from "next/navigation"
import { client } from "@/server/client"
import { Link } from "lucide-react"

import { toast } from "@/lib/hooks/use-toast"

import { Button } from "../ui/button"
import { ToastAction } from "../ui/toast"

export default function LogOff() {
  return (
    <Button
      className=""
      onClick={() => {
        client.auth.signOut()
        redirect("/")
      }}
    >
      Sign Out
    </Button>
  )
}
