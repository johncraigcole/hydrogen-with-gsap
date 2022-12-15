import { lazy, Suspense } from "react";

const Fallback = () => <div>loading...</div>;
const Animation = import.meta.env.SSR
  ? Fallback
  : lazy(() =>
      import("./Animation.client.tsx").then((mod) => ({
        default: mod.Animation,
      }))
    );

export default function AnimationLazy(props) {
  if (typeof document !== "undefined") {
    return (
      <Suspense fallback={<Fallback />}>
        <Animation {...props} />
      </Suspense>
    );
  }
}
