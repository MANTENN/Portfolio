import { Section } from "./section";


const stages = [
  {
    name: 'Design',
    description: 'I work with you on what type of website you need and gather the project requirements in this stage.'
  },
  {
    name: 'Marketing & SEO',
    description: 'I develop a wireframe, rough website content layout, and send it to you for review.'
  },
  {
    name: 'Maintenance',
    description: 'After four wireframe cycles, I work on the prototype and add some drip to the website.'
  }
]

export function ComplementaryServices() {
  return (
    <div className="p-12 md:p-10 -mx-4 2xl:m-0">
      <div className="container mx-auto md:mb-20">
        <div className="grid gap-10 grid-cols-1 md:mt-16">
          <Section title='Complementary Services' description="A simple 4 step process tailored to your business needs.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {stages.map(({ name, description }, i) =>
                <div key={'process:' + i + ":" + name} className="grid grid-cols-1 gap-4">
                  <h3 className="text-xl font-bold">{i + 1}. {name}</h3>
                  <p>{description}</p>
                </div>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}