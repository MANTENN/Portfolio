import Contact from "../../../components/contact";
import { H2 } from "../../../components/headings";
import { Hero } from "../../../components/hero";
import { CallToAction } from "../../../components/hero/call-to-action";
import { Section } from "../../../components/section";

export default function BugFixes({ params }) {
  return (
    <div className="container mx-auto mb-20">
      <div className="row grid md:grid-cols-9 gap-4 mt-8">
        <div className="col-span-4 md:col-span-9 md:order-2">
          <div className="mt-6">
            <div>
              <H2>Single Page Website/Application(SPA)</H2>
              <p></p>
              <Contact title={"Enter your details"} event="SPA" />
            </div>
            <div className="flex flex-col mt-6 gap-16">
              <Section title="White Glove Service" description="Every package comes with white-glove service" />
              <Section title="Process" description="My detail oriented process ensures maximum efficieny when working on resolving the issue at hand." />
            </div>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}