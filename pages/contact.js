import Head from "next/head";
import { default as ContactForm } from "../components/contact";
import { Header } from "../components/header";
import Sidebar from "../components/sidebar";
import { Star } from "../components/star";

const reviews = [
  {
    text: "[Very] knowledgeable and professional. [Also] had further recommendations [and direction to take—] which are super useful.",
    orig: "very knowledgeable and professional. also had further recommendations which are super useful.",
    name: "Binit Pradhanang",
    country: "Netherlands",
    rating: 5,
    time: [1, "week"],
    source: 0,
  },
  {
    text: "[I will] be using [their services] again.",
    orig: "I’ll be using them again.",
    name: "Lee Howard",
    country: "United States",
    rating: 5,
    time: [1, "month"],
    source: 0,
  },
  {
    text: "Buyer was very considerate and gave detailed instructions.",
    orig: "Buyer was very considerate and gave detailed instructions.",
    name: "Holly Hofer",
    rating: 5,
    time: [],
    source: 0,
  },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 md:col-span-3 md:order-2">
            <ContactForm title="Have any questions?" />
            <h2 className="text-xl font-bold mt-6 mt-3">Reviews</h2>
            {reviews.map((review, i) => (
              <div key={i} className="italic text-xl mb-3">
                <div className="text-2xl">
                  {review.text}
                  <span className="text-xs -mb-2">{i}</span>
                </div>
                <div className="flex items-center gap-2">
                  {review.rating ? (
                    <div className="flex text-yellow-500 my-2">
                      {new Array(review.rating).fill(0).map((_) => (
                        <Star className="w-8 h-8 p-1 fill-current" />
                      ))}
                    </div>
                  ) : null}
                  <div>{review.name}</div>
                  {review.source == 0 ? <div>— Fiverr</div> : null}
                </div>
                {review.time.length >= 0 ? (
                  <div>
                    {review.time[0]} {review.time[1]} ago
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
