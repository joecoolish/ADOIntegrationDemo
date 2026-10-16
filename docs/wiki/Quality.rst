Quality and verification
========================

Available checks
----------------

With Node.js installed, run from the repository root::

    npm run check

This runs ``node --check app.js`` for syntax only. It is not a behavior test or
linter. There is no automated test suite, build step, or configured CI pipeline.
Do not report checks that were not actually performed.

Manual acceptance checklist
---------------------------

Serve the site using `Deployment <Deployment.rst>`_ and verify:

* Six toys render with local artwork and no console errors or missing assets.
* Each category shows two toys; All toys restores six.
* Searching ``robot`` shows one toy. Searching an unmatched term shows the
  empty state. Clearing search restores the active category's results.
* Search and category filters work together; switching filters retains search.
* Price sorts run in both directions, and name sorting is alphabetical.
  Featured restores the original catalogue order.
* Add one toy twice and another once. The basket count is three, line quantities
  match, and the total equals the sum of units times displayed prices.
* Remove one line and check the count and total. Remove all lines and confirm
  the request preview button is disabled.
* Empty required fields and malformed email cannot submit. Valid fictional
  details display simulation feedback, without a network request.
* Close and reopen the dialog: input fields are cleared, but the basket remains.
  Refresh: the basket resets.
* Tab through navigation, filters, search, sort, add buttons, and dialog.
  Focus is visible, Escape closes the dialog, and focus returns to its opener.
* Inspect at 375px mobile width and desktop width, and at 200% zoom: no
  horizontal page overflow, cut-off controls, or overlapping text.
* With reduced-motion enabled, animated scrolling and toast transitions stop.
* With JavaScript disabled, the story and workshop content remain readable
  and the catalogue explains that JavaScript is needed.

When requesting review
----------------------

Record the browser, viewport, checks performed, and known limitations in the
pull request. Include desktop and mobile screenshots for visual changes.
If automated tests are introduced later, document their commands here.
