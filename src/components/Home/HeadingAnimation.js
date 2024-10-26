import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from 'split-type';

const HeadingAnimation = () => {
  const headingWrapRef = useRef(null);

  useEffect(() => {
    const typeSplit = new SplitType(".heading", {
      types: "words, chars",
      tagName: "span"
    });

    const headingWrap = headingWrapRef.current;
    const headings = headingWrap.querySelectorAll(".heading");

    const tl = gsap.timeline({ repeat: -1 });

    tl.set(headingWrap, { opacity: 1 });

    tl.from(headings[0].querySelectorAll(".char"), {
      yPercent: 100,
      stagger: { amount: 0.7 },
      duration: 1
    });

    headings.forEach((heading, index) => {
      if (index > 0) {
        tl.from(heading.querySelectorAll(".char"), {
          yPercent: 100,
          stagger: { amount: 0.7},
          duration: 1
        }, "<0.4");
      }

      if (index < headings.length - 1) {
        tl.to(heading.querySelectorAll(".char"), {
          delay: 2,
          yPercent: -150,
          stagger: { amount: 0.7 },
          duration: 1
        });
      }
    });

    return () => {
      typeSplit.revert();
    };
  }, []);

  return (
    <div ref={headingWrapRef} className="heading-wrap">
      <h1 className="heading">Frontend Developer</h1>
      <h1 className="heading">JavaScript Developer</h1> 
      <h1 className="heading">JavaScript Developer</h1> 
      <h1 className="heading">ReactJs Developer</h1> 
      <h1 className="heading">Web Developer</h1> 
      <h1 className="heading">UI Developer</h1> 
    </div>
  );
};

export default HeadingAnimation;
