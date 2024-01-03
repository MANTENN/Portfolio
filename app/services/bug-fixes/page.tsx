import { H2 } from "../../../components/headings";
import { Hero } from "../../../components/hero";
import { Section } from "../../../components/section";

export default function BugFixes({ params }) {
  return (
    <div className="container mx-auto mb-20">
      <div className="row grid md:grid-cols-9 gap-4 mt-8">
        <div className="col-span-4 md:col-span-9 md:order-2">
          <div className="mt-6">
            <div>
              <H2>Bug Fixes</H2>
              <p></p>
            </div>
            <div className="flex flex-col mt-6 gap-16">
              <Section title="White Glove Service" description="Every package comes with white-glove service" />
              <Section title="Process" description="My detail oriented process ensures maximum efficieny when working on resolving the issue at hand.">
                <div>
                  1. Gather Details
                </div>
                <div>
                  2. Test Solution
                </div>
                <div>
                  3. Deploy
                </div>
              </Section>
            </div>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}