"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoader } from "@/context/LoaderContext";
import { useAppRef } from "@/context/AppRefContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { contextSafe } = useGSAP();
  const { loaded } = useLoader();
  const { aboutContainerRef } = useAppRef();

  const aboutTextRef = useRef<HTMLDivElement>(null);

  const aboutSplitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (loaded && aboutTextRef.current && aboutContainerRef.current)
      startAnimation();
  }, [loaded]);

  const startAnimation = contextSafe(() => {
    document.fonts.ready.then(() => {
      aboutSplitRef.current?.revert();

      aboutSplitRef.current = new SplitText(aboutTextRef.current, {
        type: "chars",
        autoSplit: true,
      });

      const aboutTextAnimationTl = gsap
        .timeline({
          paused: true,
        })
        .from(aboutSplitRef.current.chars, {
          opacity: 0.2,
          stagger: 0.02,
          ease: "none",
        });

      ScrollTrigger.create({
        trigger: aboutContainerRef.current,
        start: "top 95%",
        end: "bottom 70%",
        scrub: true,
        animation: aboutTextAnimationTl,
      });
    });
  });

  return (
    <div
      ref={aboutContainerRef}
      className="flex md:items-center justify-start lg:justify-end w-screen md:h-[90vh] px-4 sm:px-8 lg:px-16 pointer-events-none select-none"
    >
      <div
        ref={aboutTextRef}
        className="max-w-2xl text-2xl sm:text-3xl lg:text-3xl xl:max-w-3xl xl:text-4xl font-pprightgrotesk-wide"
      >
        <p className="block">
          I&apos;m a final year computer science student at VIT Bhopal, passionate about tech, design, and the process of building things that just work. I like to keep things clean and functional whether it’s writing code or crafting intuitive user experiences. I’m always exploring new ideas, learning as I go, and looking for ways to improve what already exists.
        </p>
        <div className="my-[2.5rem]" />
        <p className="block">
           I enjoy breaking down problems and shaping solutions that feel smooth, thoughtful, and meaningful .I might still be figuring out the exact direction I want to follow, but one thing’s clear: I love the process of creating, refining, and making things better, one step at a time.
        </p>
      </div>
    </div>
  );
}
