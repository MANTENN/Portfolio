import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-800 dark:text-gray-300 transition-all duration-300	ease-in-out">
          <Main />
          <script async data-api="/_hive" src="/bee.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
