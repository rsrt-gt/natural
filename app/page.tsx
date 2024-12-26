"use client"

import { useState } from "react"
import Link from "next/link"
import { useRecoilState } from "recoil"

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
      <div className="w-full grid grid-cols-2 gap-5">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="font-bold text-base">Journeling</CardTitle>
            <CardDescription>
              Journeling can help you analyze your day to day emotions and
              feelings.
            </CardDescription>
            <CardContent className="px-0 flex flex-row pt-4">
              <Button variant={"secondary"} asChild>
                <Link href={"/journal/new-entry"}>New Entry</Link>
              </Button>
              <div className="px-1"></div>
              <Button className="italic font-bold" variant="outline">
                Analyze
              </Button>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="font-bold text-base"></CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="w-full">
        <RadarCharts />
      </div>
    </section>
  )
}
