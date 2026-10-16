# ADOIntegrationDemo

**Little Works** is a fictional toy manufacturer's responsive demo website, and a
sample project for exploring Azure DevOps (ADO) and GitHub integration. (Testing now)

## Run locally

Install Python 3. Start the site from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Stop with Ctrl+C. No packages, build step, account,
environment variables, or API keys are required. With Node.js and npm installed,
`npm start` runs the same server and `npm run check` checks JavaScript syntax.

## Explore the demo

- Browse six illustrated wooden toys; filter, search, and sort the catalogue.
- Add toys to a sample basket, remove items, and review illustrative USD totals.
- Preview a sample request with fictional contact details.
- Read the workshop story and manufacturing process on mobile or desktop.

**This is not a real shop.** Contact details are never sent or saved by the app.
Basket contents live only in memory and reset on refresh. Prices, age labels,
manufacturing claims, and products are fictional; nothing is safety-certified.
There is no checkout, backend, database, inventory system, or ADO connection.
All illustrations are original SVG assets served locally; no CDN or analytics
is required.

## Developer Wiki

Start at [Wiki home](docs/wiki/Home.rst):

- [Contributing and first changes](docs/wiki/Contributing.rst)
- [Local setup and deployment](docs/wiki/Deployment.rst)
- [Architecture and data flow](docs/wiki/Architecture.rst)
- [Quality and manual verification](docs/wiki/Quality.rst)
- [Security and support](docs/wiki/Security-and-Support.rst)

These version-controlled reStructuredText pages are the project's Wiki source;
they are readable in GitHub and locally. They have **not** been published to the
separate GitHub Wiki. A maintainer can enable Wiki in repository settings and
copy these pages into it using the GitHub Wiki editor (reStructuredText format).

See the repository's [Issues](https://github.com/joelday-demos/ADOIntegrationDemo/issues)
for the demo backlog. Issues include acceptance criteria and are opportunities
for future work, not intentionally broken features.
