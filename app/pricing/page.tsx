import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Sidebar from "../../components/sidebar";
import Contact from "../../components/contact";
import { Review } from "../../components/reviews";
import { Hero } from '../../components/hero'
import { reviews } from "../../data";
import { CallToAction } from "../../components/hero/call-to-action";

export const metadata = {
  title: "Pricing | Nazar Maksymchuk",
};

const generalPlans = [
  {
    name: "Retainer",
    description: "Recommened for urgent changes with a short deadline.",
    benefits: ["Respond within 15 minutes*", "Limited to 5 critical changes a month"],
    fees: [""],
    price: 100,
    subscription: true,
    actionText: "Buy",
  },
  {
    name: "Enterprise",
    description: "Need more time .",
    benefits: [
      "Respond within 15 minutes*",
      "Work on critical/urgent problems",
    ],
    price: 0,
    actionText: "Learn more",
  },
];
const consultationPlans = [
  {
    name: "Starter",
    description:
      "I will work with you and figure out what you need when you are unsure what you need and what would be the ideal solution for your scenario. Information presented in the language you speak and understand.",
    benefits: ["30 minute session", "Q&A"],
    fees: [""],
    price: 100,
    subscription: true,
    actionText: "Buy",
  },
  {
    name: "Custom",
    description: "",
    benefits: ["Unlimited session", "Q&A", "More intricate analysis"],
    price: 0,
    actionText: "Learn more",
  },
];

const websiteDevelopment = [
  {
    name: "SPA",
    description:
      "Ideal for small businesses who are just getting started. Some businesses do not require a website at-all to operate.",
    benefits: [
      "Mobile-first responsive website",
      "5 sections*",
      "Domain for 2 years",
      "Hosting for 2 years",
      "CDN",
    ],
    fees: [""],
    price: 799,
    actionText: "Buy",
  },
  {
    name: "Custom",
    description: "Do not see a website development plan that fits your needs? Send a message",
    benefits: [
      "Mobile-first responsive website",
      "Unlimited sections",
      "Unlimited pages",
    ],
    price: 0,
    actionText: "Learn more",
  },
];

const websiteMaintenance = []

const hostingSetupServices = [
  {
    name: "Setup",
    description: "Includes Wordpress, Drupal, Ghost, etc.",
    benefits: [
      "Configure standard email",
      "Host on any platform",
      "Free SSL certificates",
      "NGINX or Apache",
      "Content Delivery Network(CDN)",
      "Daily Backup",
      "WAF, Rate Limiting, and more",
    ],
    fees: [""],
    price: 199,
    oneTime: true,
    actionText: "Buy",
  },
  {
    name: "Setup Pro",
    description:
      "All in-house done by me. Configure/provision your shared or dedicated server(droplet, instance, etc.)",
    benefits: [
      "Configure standard email",
      "Host on any platform",
      "Free SSL certificates",
      "NGINX or Apache",
      "Content Delivery Network(CDN)",
      "Daily Backup",
      "WAF, Rate Limiting, and more",
      "Maintenance",
      "Flexible arrangment",
      "White-glove customer service",
    ],
    price: 0,
    actionText: "Contact",
  },
];
const managedHosting = [
  {
    name: "Starter",
    description: "Includes Wordpress, Drupal, Ghost, etc.",
    benefits: [
      "~10k monthly visits",
      "Free SSL certificates",
      "Content Delivery Network(CDN)",
      "Daily Backup",
      "Standard Security Measures",
      "White glove customer support",
    ],
    fees: [""],
    price: 30,
    subscription: true,
    actionText: "Buy",
  },
  {
    name: "Pro",
    description:
      "All in-house done by me. Configure/provision your shared or dedicated server(droplet, instance, etc.)",
    benefits: [
      "~10K monthly visits",
      "Host on any platform",
      "Free SSL certificates",
      "Content Delivery Network(CDN)",
      "Daily Backup",
      "Standard Security Measures",
      "Maintenance",
      "White-glove customer service",
    ],
    price: 0,
    actionText: "Contact",
  },
];

const bundles = [];

const ServicePlanCard = (plan, i) => (
  <div className="ring-1 ring-gray-200 dark:ring-gray-700 group dark:hover:ring-yellow-200 rounded-3xl p-8" key={i}>
    <h2
      id="tier-hobby"
      className="text-gray-900 dark:text-gray-300 text-lg font-semibold leading-8"
    >
      {plan.name}
    </h2>
    <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
      {plan.description}
    </p>
    <p className="mt-6 flex items-baseline gap-x-1">
      {plan.price !== 0 && (
        <>
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
            ${plan.price}
          </span>
          {plan.subscription && (
            <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
              /month
            </span>
          )}
          {plan.oneTime && (
            <span className="flex flex-col">
              <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                /one-time payment
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-400 dark:text-gray-500">
                plus local taxes
              </span>
            </span>
          )}
        </>
      )}
      {plan.price == 0 && (
        <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
          Contact
        </span>
      )}
    </p>
    <CallToAction event={plan.actionText} text={plan.actionText} className="text-gray-600 dark:text-black dark:bg-gradient-to-bl dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gray-500 dark:hover:ring-yellow-300 dark:text-white hover:text-amber-400 dark:hover:text-yellow-300 ring-1 ring-outset ring-gray-600 hover:ring-amber-300 dark:hover:ring-yellow-200 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline-none px-6 w-full md:w-auto"
    />
    <ul
      role="list"
      className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
    >
      {plan.benefits.map((benefit, i) => (
        <li className="flex gap-x-3" key={i}>
          <div className="w-6 h-6 rounded-full flexitems-center justify-center">
            <svg
              viewBox="0 0 16 13"
              className="w-4 h-4 text-green-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.43545 12.7324L0.237771 7.0778C-0.0744962 6.73809 -0.0744962 6.18728 0.237771 5.84753L1.3686 4.61725C1.68088 4.2775 2.18721 4.2775 2.49948 4.61725L6.00089 8.42641L13.5005 0.267574C13.8128 -0.0721423 14.3191 -0.0721423 14.6314 0.267574L15.7622 1.49785C16.0745 1.83757 16.0745 2.38838 15.7622 2.72813L6.56632 12.7325C6.25402 13.0721 5.74772 13.0721 5.43545 12.7324Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>{benefit}</div>
        </li>
      ))}
    </ul>
  </div>
);

const Card = (card) => (
  <div className="border-gray-200 border border-solid rounded-3xl p-8 my-6">
    <h2 className="text-lg font-bold mb-2">{card.title}</h2>
    {(card.descriptions || []).map((description) => (
      <p>{description}</p>
    ))}
    <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-xl mt-4 inline-block focus:ring-4 focus:ring-yellow-200 outline-none">
      {card.callToAction}
    </button>
  </div>
);

export default function Pricing({ params }) {
  return (
    <>
      <div className="container mx-auto mb-20">
        <div className="row grid md:grid-cols-9 gap-4 mt-8">
          <div className="col-span-4 md:col-span-9 md:order-2">
            <div className="mt-6">
              <Hero />
              <div className="flex flex-row gap-4 items-center mb-4">
                <h1 className="font-bold text-4xl mb-0">Pricing</h1>
              </div>
              <p className="text-lg leading-8">
                Your one-stop development freelancer. I provided services rangning from website development to managed server
                infrastructure.
              </p>
              <h2 className="font-bold text-2xl mt-16">Retainers</h2>
              <p className="text-lg leading-8 mt-4 mb-10">
                Whether your business needs critical/urgent changes or response times, I offer retainers
                for expedited services.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {generalPlans.map(ServicePlanCard)}
              </div>
              <h2 className="font-bold text-2xl mt-16">Consultation</h2>
              <p className="text-lg leading-8 mt-4 mb-10">
                Do you have a business idea and are unsure about what you need to do next? Are you wondering whether a website is the right choice, or do you already have a website and are uncertain if a new one would be the right-call? I offer consultation services to help you determine whether a website is right for your business.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {consultationPlans.map(ServicePlanCard)}
              </div>
              <div className="border-gray-200 border border-solid rounded-3xl p-6 my-4 hidden">
                <h2 className="text-2xl font-bold mb-2">Calculator</h2>
                <p>
                  Compute your total without sending in your personal
                  information—email, phone number, etc.
                </p>
                <p className="mt-2">
                  Contact me for help if you need to setup a consultation.
                </p>
                <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-2xl mt-4 inline-block focus:ring-4 focus:ring-yellow-200 outline-none">
                  Calculate
                </button>
              </div>
              <div className="my-16">
                <h2 className="font-bold text-xl -mb-2 mt-4 dark:text-green-500 mt-16">
                  Bundles
                </h2>
                <h3 className="font-bold text-4xl my-4 font-bold">
                  Website Development & Hosting
                </h3>
                <div className="-mt-4 text-2xl text-2xl font-bold">Save more by bundling.</div>
              </div>
              <h2 className="font-bold text-xl -mb-2 mt-4 dark:text-green-500 mt-16">
                Websites
              </h2>
              <h3 className="font-bold text-3xl my-4 mt-1">Development</h3>
              <p className="text-lg leading-8 mt-4 mb-10">
                Wide-range of services offered, from simple one-page websites to
                complex websites with niche needs. Websites are developed with
                open-source technologies—no vendor lock-ins.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {websiteDevelopment.map(ServicePlanCard)}
              </div>
              {/* <Card
                title={"Updates & Patches"}
                descriptions={[
                  "Is your website down because you were updating your plugins and are not a techinical person? Are you looking to either fix or build, your current website, or both?",
                ]}
                // benefits
                // build on top of existing website
                // incrementally replace old bits of the website with new updated w/ nearly 0 downtime.
                callToAction={"Contact"}
              /> */}
              <h3 className="font-bold text-3xl my-4 mt-16">Hosting Setup</h3>
              <p className="font-bold text-xl -mt-4 mb-4 dark:text-green-500">
                One-time service
              </p>
              <p className="text-lg leading-8 mt-4 mb-10">
                Whether you are trying to deploy your: wordpress blog; ecommerce
                website; business website; etc I will guide you through help you
                make the right business decision to that fits your needs the
                best.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {hostingSetupServices.map(ServicePlanCard)}
              </div>

              {/* <h3 className="font-bold text-2xl my-4">Managed Hosting</h3>
              <p className="my-4">
                I also offer managed hosting services to complement your web
                development needs whether its host gator or using my own
                in-house dedicated server.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {managedHosting.map(ServicePlanCard)}
              </div> */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold mt-16 mb-6">
                  Frequently Asked Questions
                </h2>
                <ul className="mb-16">
                  {[
                    [
                      "Do You Offer SEO (Search Engine Optimization)?",
                      "No, I do not offer SEO even though websites I build include technical SEO optimizations.",
                    ],
                    [
                      "Do You Offer Marketing?",
                      "No, I do not offer marketing services because that is not my speciality.",
                    ],
                    [
                      "Can I build on top of my current website?",
                      "Yes, it's possible to merge two different website together under one domain name.",
                    ],
                  ].map(([question, answer], i) => (
                    <li key={i}>
                      <h4 className="text-lg font-bold">{question}</h4>
                      <p className="text-lg leading-8 mb-3">{answer}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-16">
                <h2 className="text-3xl font-bold">Partnership Inquiries</h2>
                <div className="mt-2 mb-6">Are you a designer or marketer, and need a software developer to partner up with?</div>
                <CallToAction event="partnership" />
              </div>
              <div className="md:grid grid-cols-2 gap-11">
                <div className="mb-16 md:order-2">
                  <h2 className="text-2xl font-bold mb-6">Reviews</h2>
                  <div className="flex flex-col gap-2">
                    {reviews.map(Review)}
                  </div>
                </div>
                <div className="max-w-2xl">
                  <Contact title="Have any more questions you would like to get answered?" />
                </div>
              </div>
            </div>
          </div>
          {/* <Sidebar /> */}
        </div>
      </div>
    </>
  );
}
