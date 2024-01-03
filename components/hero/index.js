import { CallToAction } from "./call-to-action";

export function Hero() {
  return (
    <div className="flex items-center h-full py-16">
      <div className="max-w-2xl">
        <span className="block text-green-700 dark:text-green-500 font-bold text-4xl leading-8 mb-6">
          Stop wasting your time. Excel at your speciality.
        </span>
        <div className="flex gap-2 items-center mb-8">
          <CallToAction />
          <a href="tel:279-218-0833" className="flex items-center mx-4">(279)-218-0833</a>
        </div>
      </div>
    </div>
  )
}