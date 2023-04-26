import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
