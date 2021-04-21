import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import NProgressBar from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
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
        <div style={{ margin: "20px" }}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}
