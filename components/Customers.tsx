import { Section } from "./section";


const stages = [
  {
    name: 'Howard Lee',
    description: 'I will be using their services again.'
  },
  {
    name: 'Binit Pradhanang ',
    description: 'Very knowledgeable and professional. Also had further recommendations and direction to take—which are super useful.'
  },
  {
    name: 'Holly Hofer',
    description: 'Buyer was very considerate and gave detailed instructions.'
  }
]

export function Customers() {
  return (
    <div className="p-12 md:p-10 -mx-4 2xl:m-0">
      <div className="container mx-auto">
        <div className="grid gap-10 grid-cols-1 md:mt-16">
          <Section title='Customers' description="All happy customers. Results guaranteed or refund.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {stages.map(({ name, description }, i) =>
                <div key={'process:' + i + ":" + name} className="flex flex-col gap-4 items-start">
                  <h3 className="text-xl font-bold">{name}</h3>
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