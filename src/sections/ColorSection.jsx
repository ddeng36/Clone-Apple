import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;
const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
`;

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let elements = sectionRef.current;
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgbColor) => {
      textElem.innerText = text;
      textElem.style.color = color;
      leftElem.style.backgroundColor = `rgba(${rgbColor},0.8)`;
      rightElem.style.backgroundColor = `rgba(${rgbColor},0.4)`;
    };

    gsap.to(elements, {
      scrollTrigger: {
        trigger: elements,
        start: "top top",
        end: `+=${elements.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: elements,
          start: "top top",
          end: `+=${elements.offsetWidth +1000}`,
          scrub: true,
        },
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(elements, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });
    return () => {
      t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rightRef} />
    </Section>
  );
};

export default ColorSection;
