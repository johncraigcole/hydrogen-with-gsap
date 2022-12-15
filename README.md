# Hydrogen with GSAP

Investigating the possibility of using [GSAP (Greensock Animation Program)](https://github.com/greensock/GSAP) with Hydrogen.

## Getting started

1. Run `yarn && yarn dev` observe the animation working in dev.
2. Run `yarn build && yarn preview` observe the error
```
Some functionality, such as asynchronous I/O (fetch, Cache API, KV), timeouts (setTimeout, setInterval), and generating random values (crypto.getRandomValues, crypto.subtle.generateKey), can only be performed while handling a request
```

**Requirements:**

- Node.js version 16.14.0 or higher
- Yarn
