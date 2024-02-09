import { Process } from "@/components/process";
import Contact from "../../components/contact";
import { H2 } from "../../components/headings";
import { Hero } from "../../components/hero";
import { Section } from "../../components/section";
import { Customers } from "@/components/Customers";
import { ComplementaryServices } from "@/components/ComplementaryServices";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";
import Image from "next/image";
import { Feedback } from "@/components/Feedback";

const faqs = [
  {
    question: "Why are my prices higher than $30 a month no-code website builders.",
    answer: "You are getting a tighly integrated product that is thoroughly vetted and designed to work as expected."
  }
]

const A = "Focus on what matters in your business."
const B = "Lean on what you excel at."
const C = "Enable your skills to compound."
const RESIDENTIAL_CONSTRUCTION_RENOVATION = "ADD AN \"ADU\" TO YOUR WEBSITE TODAY."

export default function BugFixes({ params }) {
  return (
    <>
      <div className="container mx-auto mb-20 mt-20">
        <div className="row grid md:grid-cols-10 gap-4 mt-8">
          <div className="col-span-9 md:col-span-6 md:order-2 px-4 self-center">
            <div className="grid gap-2">
              {/* Wasting hours on code? */}
              <Hero hook={`Single Page Application (SPA)`} description={<><p>Wasting hours tinkering with code? {A || A || B || C} Launch your highly performant website now in no-time! </p></>} />
              <div className="grid gap-4">
                <div className="text-gray-800 dark:text-gray-300 flex items-center gap-2"><Feedback className="w-6 h-6" fill="currentColor" />Rated 5/5 in 10 reviews</div>
                <h2 className="font-bold grid gap-1">
                  Trusted by
                </h2>
                <div className="flex items-center gap-6 md:gap-2 overflow-hidden grayscale hover:grayscale-0 transition-all ease-in-out duration-300">
                  <Image src={'/howard_insurance_brokerage.jpg'} alt="Howard Insurance Brokerage" width="60" height="60" className="w-auto" />
                  <Image src={'/mawnster-marketing.png'} alt="Mawnster Marketing" width="180" height="80" className="ml-5 mr-3 mt-2 w-auto" />
                  <Image src={'/kurakani.png'} alt="Mawnster Marketing" width="180" height="80" className="mx-2 mt-2 w-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 md:col-span-4 mt-12 md:-mt-0 md:m-4 md:order-3 p-8 md:p-10 ring-1 ring-gray-200 dark:ring-gray-700 group rounded-3xl">
            <Contact title={"Enter your details"} event="SPA" />
          </div>
        </div>
      </div >
      <Process />
      <Customers />
      <FrequentlyAskedQuestions />
    </>
  )
}