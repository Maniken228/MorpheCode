import { useCallback, useRef, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AudienceStrip from "./components/sections/AudienceStrip";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";
import DemoDialog from "./components/demo/DemoDialog";
import useScrollReveal from "./hooks/useScrollReveal";
import type { DialogKind } from "./data/content";

export default function App() {
  const [dialog, setDialog] = useState<DialogKind | null>(null);
  const [plan, setPlan] = useState("Free");
  const main = useRef<HTMLElement>(null);
  useScrollReveal(main);
  const closeDialog = useCallback(() => setDialog(null), []);
  const startDemo = useCallback((name = "Free") => {
    setPlan(name);
    setDialog("demo");
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onStart={startDemo} />
      <main id="main" ref={main}>
        <Hero onStart={startDemo} />
        <AudienceStrip />
        <Features />
        <HowItWorks />
        <Pricing onStart={startDemo} />
        <Testimonials />
        <CallToAction onStart={startDemo} />
      </main>
      <Footer onDialog={setDialog} />
      {dialog && (
        <DemoDialog
          kind={dialog}
          plan={plan}
          onClose={closeDialog}
          onStart={startDemo}
        />
      )}
    </>
  );
}
