import { Section } from "./section";


const items = [
  [
    "Do You Offer SEO (Search Engine Optimization)?",
    "No, I do not offer SEO even though websites I build include technical SEO optimizations.",
  ],
  [
    "What is the difference between SEO and technical SEO?",
    "SEO is a broad term that covers technical, on-page, and off-page. Technical SEO involves marking up pages for search enginges to extract certain information such as title, metatags, scrapping, etc.",
  ],
  [
    "Do You Offer Marketing?",
    "No, I do not offer marketing services because that is not my speciality.",
  ],
  [
    "Can I build on top of my current website?",
    "Yes, it's possible to merge two different websites together under one domain name.",
  ],
]

export function FrequentlyAskedQuestions() {
  return (
    <div className="p-12 md:p-10 -mx-4 2xl:m-0">
      <div className="container mx-auto md:mb-20">
        <div className="grid gap-10 grid-cols-1 md:mt-16">
          <Section title='FAQs' description={null}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {items.map(([name, description], i) =>
                <div key={'process:' + i + ":" + name} className="flex flex-col gap-4">
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