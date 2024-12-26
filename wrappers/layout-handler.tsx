"use client"

import React from "react"
import { RecoilRoot } from "recoil"

export default function LayoutHandler({ children }: { children: any }) {
  return <RecoilRoot>{children}</RecoilRoot>
}
