import { client } from "@/server/client"
import { userAuthed } from "@/states/userAuthed"
import { useRecoilState } from "recoil"

import { toast } from "@/lib/hooks/use-toast"

const { data } = client.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
})

export const handler = (
  authState: boolean,
  setAuthState: (s: boolean) => void
) =>
  client.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
    switch (event) {
      case "INITIAL_SESSION":
        if (session !== null && session.access_token !== null) {
          setAuthState(true)
        }
        break
      case "SIGNED_IN":
        if (session !== null && session.access_token !== null) {
          setAuthState(true)
        }
        break

      case "SIGNED_OUT":
        if (session?.access_token === null || session === null)
          setAuthState(false)
        toast({ title: "Succesfully Signed Out" })
        break
      case "USER_UPDATED":
        setAuthState(false)
        toast({
          title: "User Information Updated",
          description: "Re-Login to authenticate you.",
        })
      default:
        break
    }
  })
