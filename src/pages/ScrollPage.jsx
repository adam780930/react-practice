import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Mainpage from "./Mainpage.jsx";
import Markdownpage from "./Markdownpage.jsx";
import Contactpage from "./Contactpage.jsx";

function ScrollPage() {
  const location = useLocation();
  const sectionRefs = useRef({});
  const isFirstScroll = useRef(true);
  const [visibleIds, setVisibleIds] = useState(() => new Set(["home"]));

  // Snap-scroll the whole document only while this page is mounted, so
  // /example and /introduction keep their normal page scroll behavior.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("snap-y", "snap-proximity", "scroll-smooth");
    return () => {
      html.classList.remove("snap-y", "snap-proximity", "scroll-smooth");
    };
  }, []);

  // Track which section is on screen, both to drive the reveal animation
  // and to keep the URL hash in sync as the user scrolls past each section.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          });
          return next;
        });

        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const nextUrl =
            mostVisible.target.id === "home"
              ? window.location.pathname
              : `${window.location.pathname}#${mostVisible.target.id}`;
          if (nextUrl !== window.location.pathname + window.location.hash) {
            window.history.replaceState(null, "", nextUrl);
          }
        }
      },
      { threshold: [0.35, 0.6] },
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to the section matching the URL hash whenever it changes via
  // routing (nav link clicks, direct links) - not our own replaceState above.
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const target = sectionRefs.current[hash] || sectionRefs.current.home;
    if (target) {
      target.scrollIntoView({
        behavior: isFirstScroll.current ? "auto" : "smooth",
        block: "start",
      });
    }
    isFirstScroll.current = false;
  }, [location.hash]);

  const sectionClass = (id) =>
    `snap-start scroll-mt-24 min-h-screen flex flex-col justify-center py-8 transition-all duration-700 ease-out ${
      visibleIds.has(id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <div>
      <section
        id="home"
        ref={(node) => (sectionRefs.current.home = node)}
        className={sectionClass("home")}
      >
        <Mainpage />
      </section>
      <section
        id="markdown"
        ref={(node) => (sectionRefs.current.markdown = node)}
        className={sectionClass("markdown")}
      >
        <Markdownpage />
      </section>
      <section
        id="contact"
        ref={(node) => (sectionRefs.current.contact = node)}
        className={sectionClass("contact")}
      >
        <Contactpage />
      </section>
    </div>
  );
}

export default ScrollPage;
