**_WIP_**

This is a fork of [react-glowing-button](https://github.com/nusu/react-glowing-button).

Changes to the dependencies:

- [ ] Remove [styled-components](https://styled-components.com/) as a dependency as use [tailwind](https://tailwindcss.com/) where possible.
- [x] Remove [yarn](https://yarnpkg.com/) and replace with [pnpm](https://pnpm.io/)
- [ ] Move from Next.js [13.1](https://nextjs.org/blog/next-13-1) to Next.js [14.1](https://nextjs.org/blog/next-14-1)
  - [ ] Move from Pages to App Router

Notes:

- [usehook-ts](https://usehooks-ts.com/) is used in [useElementSize](./lib/useElementSize.ts)

<!-- TODOS:

- [ ] Remove pages/\_app.tsx
- [ ] Remove \_document.tsx
- [ ] Replace font link import with google/fonts import
- [ ] Lift up styles/globals.css into app/
- [ ] Get rid of styles/
- [ ] Why `ignoreBuildErrors: true` in next.config.js?

Porting:

Structure of the page, port top down [1] to [6]. First create dummies, then port.

```
Container [1]
  Stars [2]
  Intro [3]
  Browser [4]
  Credits [5]
  Notice [6]
``` -->
