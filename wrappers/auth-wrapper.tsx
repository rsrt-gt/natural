"use client"

import React, { Suspense, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { userAuthenticated } from "@/server/auth"
import { client } from "@/server/client"
import { userAuthed } from "@/states/userAuthed"
import { useRecoilState } from "recoil"

import { AuthPage } from "@/components/auth/auth-page"
import { handler } from "@/components/auth/auth-watch"
import Loading from "@/components/functional-components/loading"

export default function ({ children }: { children: any }) {
  const params = usePathname()
  const authState = userAuthed((state) => state.state)
  const setAuthState = userAuthed((state) => state.setState)
  useEffect(() => {
    handler(authState, setAuthState)
    console.log(authState)
    console.log(params)
  }, [client.auth.onAuthStateChange])

  return (
    <Suspense fallback={<Loading />}>
      {} <AuthPage authState={authState} />
      {children}
    </Suspense>
  )
}
