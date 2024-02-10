import { Section } from "./section";


const stages = [
  {
    name: 'Consulting',
    description: 'I work with you on what type of website you need and gather the project requirements in this stage.'
  },
  {
    name: 'Development',
    description: 'After five development cycles, I work on the prototype and add some drip to the website. '
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
          <Section title='Process' description="The process is tailored to your business needs, consisting of three carefully planned steps. We start with detailed consultation to understand your vision and gather project requirements. Then, through iterative development cycles, we create a prototype, refine it based on your feedback, and add enhancements. Finally, we deploy the refined website to production, ensuring it meets your expectations and is ready for public access.">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {stages.map(({ name, description }, i) =>
                <div key={'process:' + i + ":" + name} className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold flex items-center gap-6">
                    <span className="p-1 flex items-center justify-center rounded-full border border-solid border-white w-10 h-10">{i + 1}</span>{name}</h3>
                  {/* <p>{description}</p> */}
                </div>
              )}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}