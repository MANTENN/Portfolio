import Head from "next/head";

import { default as ContactForm } from "../../components/contact";
import Sidebar from "../../components/sidebar";
import { reviews } from "../../data";
import { Review } from "../../components/reviews";

export const metadata = {
  title: "Contact Nazar Maksymchuk",
};

export default async function Contact() {
  return (
    <>
      <Head>
        <title>Contact Nazar Maksymchuk - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-4 md:col-span-3 md:order-2">
            <ContactForm title="Have any questions?" />
            <h2 className="text-xl font-bold mt-6 mt-3">Reviews</h2>
            {reviews.map((review, i) => (
              <Review key={i} i={i} {...review} />
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
