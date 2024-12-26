"use client"

import { userAuthed } from "@/states/userAuthed"
import { useRecoilState } from "recoil"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Icons } from "../icons"
import { AuthForm } from "./auth-form"

export function AuthPage({ authState }: { authState: boolean }) {
  return (
    <Dialog open={!authState}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="flex flex-row  items-center  gap-2">
            <h1 className="font-bold text-xl">Welcome Back!</h1>
          </DialogTitle>
          <DialogDescription>
            <i className="italic">Natural</i> - Pursuing, Achieveing, Creating,
            and Understanding personal improvement.
          </DialogDescription>
        </DialogHeader>
        <AuthForm />
        <DialogFooter className="border-t-2 pt-4">
          <Button className="w-full">
            Sign In with <Icons.google />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
