# Aunnnn portfolio

## Stack

Static site built with [Astro](https://docs.astro.build) (`output: 'static'`). No backend, no server-side rendering — every page is prebuilt HTML.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Deploying to Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 (see `.node-version`) |

Connect the repo in the Cloudflare Pages dashboard and it will build on every push. No Workers or `wrangler` config needed for this static site.

Redirects for a couple of legacy project URLs live in [`public/_redirects`](public/_redirects) and are picked up automatically by Cloudflare Pages.
