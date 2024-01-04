import ThemeProvider from "./layout-client";
import ApolloClientProvider from "./apollo-client";
import NProgressBar from "./nprogress-client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useSpring, animated } from "@react-spring/web";

import "../styles/globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1EDCDHVLR7">
      </Script>
      <Script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1EDCDHVLR7');
        `}} />

      <body>
        <div className="p-4 2xl:p-0 bg-white dark:bg-gray-800 dark:text-gray-300 transition-all duration-300	ease-in-out">
          <ThemeProvider attribute="class">
            <ApolloClientProvider>
              <NProgressBar
                color="#fde68a"
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
              />
              <Header />
              {children}
              <Footer />
            </ApolloClientProvider>
          </ThemeProvider>
        </div>
        <Script async data-api="/_hive" src="/bee.js" />
        <Script dangerouslySetInnerHTML={{
          __html: `
           !function(f,b,e,v,n,t,s)
           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
           n.queue=[];t=b.createElement(e);t.async=!0;
           t.src=v;s=b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t,s)}(window, document,'script',
           'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', ${process.env.PIXEL_ID});
           fbq('track', 'PageView');
        `}} />
        <noscript>
          <img height="1" width="1"
            src="https://www.facebook.com/tr?id=1089428102065216&ev=PageView
&noscript=1"/>
        </noscript>
      </body>
    </html>
  );
}
