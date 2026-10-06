import { useEffect } from "react";
import type { RefObject } from "react";

export default function useScrollReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = root.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [
      ...container.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );

    function update() {
      observer.disconnect();
      if (preference.matches) {
        container!.classList.remove("motion-ready");
        return;
      }
      container!.classList.add("motion-ready");
      elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
        if (!element.classList.contains("is-visible"))
          observer.observe(element);
      });
    }
    update();
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
      container.classList.remove("motion-ready");
    };
  }, [root]);
}
