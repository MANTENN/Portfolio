import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import NProgressBar from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { DefaultLayout as Layout } from "../layouts/default";

import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/router";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [transition, api] = useSpring(() => ({
    from: { opacity: 0, top: 100 },
    to: { opacity: 1, top: 0 },
    position: "relative",
  }));

  useEffect(() => {
    const handleRouteChangeStart = () => {
      api.start({
        opacity: 0,
        top: 100,
        position: "relative",
      });
    };
    const handleRouteChangeEnd = () => {
      api.start({
        opacity: 1,
        top: 0,
        position: "relative",
      });
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      console.log("Router Listener Unmounted");
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
    };
  }, [router.pathname]);

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider attribute="class">
      <ApolloProvider client={apolloClient}>
        <NProgressBar
          color="#fde68a"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <Layout>
          <animated.div
            className="will-change-top"
            style={transition}
            key={router.pathname}
          >
            <Component {...pageProps} />
          </animated.div>
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
}
