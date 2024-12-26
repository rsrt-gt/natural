"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { RadarCharts } from "@/components/functional-components/radar-charts"

export default function IndexPage() {
  const [mood, setMood] = useState<number>(5)

  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <Card className=" w-full">
        <CardHeader className="w-full grid grid-cols-2">
          <CardTitle className="flex flex-row col-span-1 items-center">
            Jounral Entry{" "}
            <p className="text-sm font-semibold ml-4">
              {new Date().getMonth()}/{new Date().getUTCDate()}
            </p>
          </CardTitle>
          <div className="col-span-1 flex justify-end items-center">
            <Button
              asChild
              className=" font-bold dark:bg-red-800 bg-red-500"
              variant={"destructive"}
            >
              <Link href={"/"}>Cancel</Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </section>
  )
}
