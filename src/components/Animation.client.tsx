import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Animation() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".moving-span", {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className="app" ref={app}>
      <h1>Hello</h1>
      <div className="moving-span">Moving Div</div>
    </div>
  );
}
