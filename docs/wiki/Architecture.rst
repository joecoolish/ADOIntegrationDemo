Architecture
============

The application is a static, single-page site with no runtime packages.

File map
--------

* ``index.html``: navigation, landing content, catalogue controls, and native
  sample-request dialog.
* ``styles.css``: responsive layout, product colors, focus states, and
  reduced-motion support.
* ``app.js``: fixed catalogue, filtering, sorting, in-memory basket, and
  simulated request feedback.
* ``assets/toys.svg``: reusable original product illustration symbols.
* ``assets/workshop.svg``: self-contained original hero illustration.
* ``package.json``: optional start and syntax-check shortcuts.
* ``docs/wiki/``: contributor-maintained project guides.

Data flow
---------

The catalogue array supplies product IDs, descriptions, categories, illustrative
USD prices, fictional ages, colors, and artwork references. Search and category
filters combine; sorting applies to the filtered results without mutating the
original array.

Adding a toy increments its quantity in a JavaScript Map keyed by product ID.
The basket count is total units, not distinct products. Removing a line removes
all units of that toy. Totals multiply quantities by illustrative retail prices;
they do not include tax, shipping, or wholesale discounts.

The native dialog traps focus and supports Escape. Contact inputs use browser
validation. Submitting prevents navigation and displays explicit simulation
feedback. The form clears after submission and on closing. No request is
transmitted, and no cookies, browser storage, or analytics are used.
Refreshing resets all application state.

Boundaries
----------

There is no API, payment provider, account system, inventory database, email
service, or Azure DevOps client. Python serves files only. HTML rendering of
catalogue cards uses trusted hard-coded data; future external data must be
rendered safely rather than interpolated into HTML.

Future integrations should be separately designed, reviewed, and tested. Never
place provider credentials in browser JavaScript.
