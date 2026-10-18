# Cyber Eagles · FTC 27662

The Cyber Eagles team website, imported from the published site and revised around the team's first-season notebook. It keeps the original eleven pages, robot details, autonomous routines, outreach, and acknowledgements.

## Run locally

Use Node.js 22 or newer. There are no third-party dependencies and no credentials are needed for local development.

```sh
npm run dev
```

The development server listens on port 8000. Stop it with Ctrl+C. Rebuild after editing page content, then refresh the browser. Use `PORT=8001 npm start` to choose another port.

```sh
npm run check
```

This rebuilds the site and checks local links, image and script paths, fragments, metadata, and duplicate IDs.

## Edit the website

- `content/home.mjs`: homepage text and layout.
- `content/pages.mjs`: the other ten pages.
- `scripts/build.mjs`: shared page shell, navigation, footer, and metadata.
- `public/assets/site.css`: responsive styles.
- `public/assets/site.js`: navigation, keyboard-accessible tabs, gallery filters, and image dialog.

Run `npm run build` after source changes. The generated HTML in `public/` is committed so the site can also be hosted directly as static files. Edit the source modules rather than generated HTML.

## Hosting on Cloudflare

The complete static website is in `public/`. For a Cloudflare Pages Git build, use `npm run build` as the build command and `public` as the output directory. No application server, database, or secrets are required.

An optional deployment package in `cloudflare/` publishes the same files as a static-assets Worker named `cyber-eagles-robotics`. Use Node.js 24 or newer for deployment. Its deployment tools are separate from the dependency-free website:

```sh
npm --prefix cloudflare ci
npm --prefix cloudflare run check
npm --prefix cloudflare run deploy
```

The check command builds and validates the deployment without uploading it. Deployment requires a Cloudflare account login and network access to `api.cloudflare.com`. For browser authorization from another device, use `npm --prefix cloudflare run login`; check the connection with `npm --prefix cloudflare run whoami`. The launcher uses the workspace's HTTPS proxy when one is provided and writes CLI logs to the ignored `cloudflare/.cloudflare/` directory.

The configuration enables the Worker's `workers.dev` address and serves the real 404 page for missing paths. It does not configure a custom domain. See Cloudflare's [project workflow](https://developers.cloudflare.com/cf/projects/) and [configuration reference](https://developers.cloudflare.com/cf/projects/cloudflare-config/).

Cloudflare agent skills and MCP registration are configured separately in the cloud environment. Account authorization is separate from installing those tools.

## Content and image sources

Original site: https://cyber-eagles-robotics.candidbread3.chatgpt.site

The original site describes a first-season robot and includes inconsistent relative dates. This version identifies those details as an archive without inventing a calendar year or implying they describe the current robot. Ideas such as AprilTags, odometry, a color sensor, sponsorship, and a YouTube channel remain proposals.

The reference gallery preserves the original image credits:

- `engineering.jpg`: [Titan Robotics Club](https://www.titanrobotics.com/ftc-robots).
- `robots.jpg`: [Heritage Middle School](https://hms.frenship.net/apps/pages/index.jsp?pREC_ID=2369735&type=d&uREC_ID=1607100).

These photographs show other teams' robots. They are labeled accordingly and are not used as Cyber Eagles team photography. No member names, contact details, sponsors, or achievements were invented.
