import Contact from "../../../components/contact";
import { H2 } from "../../../components/headings";
import { Hero } from "../../../components/hero";
import { Section } from "../../../components/section";

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
      <div className="container mx-auto mb-20">
        <div className="row grid md:grid-cols-10 gap-4 mt-8">
          <div className="col-span-9 md:col-span-6 md:order-2 px-4 self-center">
            <div className="mt-6">
              <div className="-mb-10 grid gap-1">
                <h1 className="text-xl font-bold">Single Page Website/Application(SPA)</h1>
                <p>Launch your new business with an enhanced website developed by a professional.</p>
              </div>
              {/* Wasting hours on code? */}
              <Hero hook={`Wasting hours tinkering with code? ${A || A || B || C}`} />
            </div>
          </div>
          <div className="col-span-9 md:col-span-4 -mt-14 md:-mt-0 md:m-4 md:order-3 p-8 md:p-10 ring-1 ring-gray-200 dark:ring-gray-700 group rounded-3xl">
            <Contact title={"Enter your details"} event="SPA" />
          </div>
        </div>
      </div >
      <div className="bg-black text-white dark:bg-white dark:bg-opacity-10 p-12 md:p-10 -mx-4 2xl:m-0">
        <div className="container mx-auto md:mb-20">
          <div className="grid gap-10 md:mt-16">
            <Section title='Process' description="A simple 4 step process to get your business online in notime!">
              <div className="grid grid-cols-4 text-xl font-bold mt-10">
                <div>
                  1. Gather Requirements
                </div>
                <div>
                  2.Wire-frame
                </div>
                <div>
                  3.Prototype
                </div>
                <div>
                  4.Production
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}