"use client"

import Link from "next/link"
import { client } from "@/server/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/lib/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  email: z.string().email({ message: "Email is Invalid" }),
  password: z.string().min(8, "Password must be greater then 8"),
})

export function AuthForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await client.auth
        .signInWithPassword({
          email: data.email,
          password: data.password,
        })
        .then((data) => {
          toast({
            title: "You've succesfully signed in",
            description: "Welcome back " + data.data.user?.email,
          })
        })
    } catch (error) {
      toast({ title: "Error occured", description: error + "" })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@natural.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="w-full flex flex-row gap-2">
          <Button type="submit" variant={"outline"} className="w-full">
            Log in
          </Button>
          <Button variant={"secondary"} className="w-full" asChild>
            <Link href={"/auth/register"}>Create Account</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
