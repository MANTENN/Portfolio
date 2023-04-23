import Head from "next/dist/next-server/lib/head";
import { default as ContactForm } from "../components/contact";
import { Header } from "../components/header";
import Sidebar from "../components/sidebar";

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
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
