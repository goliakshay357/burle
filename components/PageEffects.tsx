"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nav = document.getElementById("topnav");
    const heroBtn = document.getElementById("hero-inquire");
    const hero = document.getElementById("hero");

    let navObs: IntersectionObserver | undefined;
    if (nav && heroBtn && hero) {
      navObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              nav.classList.remove("visible");
              heroBtn.classList.remove("hidden");
            } else {
              nav.classList.add("visible");
              heroBtn.classList.add("hidden");
            }
          });
        },
        { threshold: 0.15 },
      );
      navObs.observe(hero);
    }

    let revealObs: IntersectionObserver | undefined;
    const reveals = document.querySelectorAll<HTMLElement>(".reveal-up");
    if (reduced) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObs?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
      );
      reveals.forEach((el) => revealObs!.observe(el));
    }

    const faqRows = document.querySelectorAll<HTMLElement>(".faq-row");
    const onFaqClick = (row: HTMLElement) => () => {
      const wasOpen = row.classList.contains("open");
      document.querySelectorAll(".faq-row.open").forEach((r) => r.classList.remove("open"));
      if (!wasOpen) row.classList.add("open");
    };
    const faqHandlers: Array<{ row: HTMLElement; handler: () => void }> = [];
    faqRows.forEach((row) => {
      const handler = onFaqClick(row);
      row.addEventListener("click", handler);
      faqHandlers.push({ row, handler });
    });

    return () => {
      navObs?.disconnect();
      revealObs?.disconnect();
      faqHandlers.forEach(({ row, handler }) => row.removeEventListener("click", handler));
    };
  }, []);

  return null;
}
