import { ReactNode } from "react";
import { CallToAction } from "./call-to-action";

export function Hero({ hook = "Stop wasting your time. Excel at your speciality.", description = null }: { hook?: String; description?: string | ReactNode }) {
  return (
    <div className="flex items-center h-full">
      <div className="max-w-2xl grid gap-8">
        <div className="grid gap-4">
          <span className="block font-bold text-4xl leading-9">
            {hook}
          </span>
          {description}
        </div>
        <div className="flex-col md:flex-row gap-2 md:items-center mb-8 hidden md:flex">
          <CallToAction />
          <a href="tel:279-218-0833" className="flex items-center mx-4">(279)-218-0833</a>
        </div>
      </div>
    </div>
  )
}