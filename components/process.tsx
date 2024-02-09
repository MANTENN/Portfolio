import { Section } from "./section";


const stages = [
  {
    name: 'Consulting',
    description: 'I work with you on what type of website you need and gather the project requirements in this stage.'
  },
  {
    name: 'Prototype',
    description: 'After four wireframe cycles, I work on the prototype and add some drip to the website. '
  },
  {
    name: 'Production',
    description: 'I will refine the website based on the last cycle of prototype feed back and deploy the website to production. In other words, i will make your website publicly accessible to others.'
  },
]

export function Process() {
  return (
    <div className="bg-green-800 text-white dark:bg-white dark:bg-opacity-10 p-12 md:p-10 -mx-4 2xl:m-0">
      <div className="container mx-auto md:mb-20">
        <div className="grid gap-10 grid-cols-1 md:mt-16">
          <Section title='Process' description="A simple 4 step process tailored to your business needs.">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {stages.map(({ name, description }, i) =>
                <div key={'process:' + i + ":" + name} className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold flex items-center gap-6">
                    <span className="p-1 flex items-center justify-center rounded-full border border-solid border-white w-10 h-10">{i + 1}</span>{name}</h3>
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