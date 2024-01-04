"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import Sidebar from "../../components/sidebar";

export default function Thanks({ params }) {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  return (
    <>
      <Head>
        <title>Success - Entreprenuer</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_7qpadqcv', {"optOut":false,"useDecimalCurrencyValues":true,"email":${email}});rdt('track', 'PageVisit');rdt('track', 'Lead', { itemCount: 1});`,
          }}
        />
      </Head>
      <div className="container mx-auto mb-20">
        <div className="row grid grid-cols-9 gap-4 mt-8">
          <div className="col-span-4 md:col-span-5 md:order-2">
            <div className="max-w-xl">
              <div className="flex flex-row gap-4 items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <svg
                    viewBox="0 0 16 13"
                    className="w-6 h-6 text-yellow-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.43545 12.7324L0.237771 7.0778C-0.0744962 6.73809 -0.0744962 6.18728 0.237771 5.84753L1.3686 4.61725C1.68088 4.2775 2.18721 4.2775 2.49948 4.61725L6.00089 8.42641L13.5005 0.267574C13.8128 -0.0721423 14.3191 -0.0721423 14.6314 0.267574L15.7622 1.49785C16.0745 1.83757 16.0745 2.38838 15.7622 2.72813L6.56632 12.7325C6.25402 13.0721 5.74772 13.0721 5.43545 12.7324Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="font-bold text-3xl mb-0">Submission Received</h2>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  I received your message. If your inquiry is urgent, please
                  text (279-218-0833) and mention id# to expedite your request.
                </p>
                <p>Otherwise, I will reply by email as soon as possible.</p>
                <p className="mt-3">
                  Talk to you soon, <br /> Nazar Maksymchuk
                </p>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
