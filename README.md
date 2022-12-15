# Hydrogen with GSAP

Investigating the possibility of using [GSAP (Greensock Animation Program)](https://github.com/greensock/GSAP) with Hydrogen.

## How To

In Hydrogen v1 all client components are still rendered on the server. This can cause problems for some JS packages (like GSAP), where window resources are accessed including functions like `setTimeout` which aren't available in a worker runtime.

To get around this, you need to lazy load the client component that's using a package like GSAP.

In this example, [AnimationLazy.client.tsx](/src/components/AnimationLazy.client.tsx) lazily loads [Animation.client.tsx](/src/components/Animation.client.tsx) with `React.lazy`. By lazily loading the client component it keeps requests to access `window` or `document` out of the worker runtime, and ensures the Hydrogen site can be built and deployed to a worker runtime like Oxygen or Cloudflare.

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn/npm
