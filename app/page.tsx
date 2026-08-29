import { About, ContactCta, Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Method, Principles } from "./_components/method";
import { ScrollProgress } from "./_components/motion";
import { Pipeline } from "./_components/pipeline";
import { Positioning, Services } from "./_components/services";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Services />
        <Pipeline />
        <Method />
        <Principles />
        <About />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
