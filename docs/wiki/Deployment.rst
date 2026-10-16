Local setup and deployment
==========================

Prerequisites
-------------

* Git to obtain the repository.
* Python 3 for the development server (``python3 --version``).
* A current Chrome, Edge, Firefox, or Safari browser supporting HTML dialogs.
* Optional Node.js and npm for the JavaScript syntax check.

No dependency installation, secrets, environment file, database, or build
pipeline is necessary.

Start locally
-------------

Clone ``https://github.com/joelday-demos/ADOIntegrationDemo.git`` and enter the
repository directory. From that root, run::

    python3 -m http.server 8000 --bind 127.0.0.1

Visit http://127.0.0.1:8000. With npm available, ``npm start`` is an equivalent
shortcut. Keep the terminal running; Ctrl+C stops the server. Changes are
visible after refreshing the page.

Bind to loopback as shown; Python's development server is not a public
production server. Do not enter real personal information into a demo.

Troubleshooting
---------------

* Port already in use: stop the other process or use
  ``python3 -m http.server 8001 --bind 127.0.0.1`` and visit port 8001.
* ``python3`` not found: install Python 3 using your platform's supported method.
  On Windows, ``py -3 -m http.server 8000 --bind 127.0.0.1`` may be available.
* Directory listing instead of the site: start the server from the directory
  containing ``index.html``.
* Missing artwork or catalogue: use the HTTP URL, not ``file://``, enable
  JavaScript, and inspect the browser console and network panel.
* Old styles: hard-refresh or disable cache temporarily in developer tools.
* Empty basket after refresh: expected; the demo has no persistence.

Static hosting
--------------

Deploy ``index.html``, ``styles.css``, ``app.js``, and ``assets/`` together to
a static HTTPS host. Preserve paths and filename case. There is no build
output and no server-side routing configuration. Relative asset URLs allow
hosting under a subdirectory as well as a domain root.

For GitHub Pages, a maintainer can select an approved deployment branch and
the repository root under Settings > Pages. Availability depends on repository
visibility and account settings. This change does not enable Pages or
provision a live deployment. Do not publish private material accidentally.

Release and rollback
--------------------

1. Review the diff and run the `Quality checklist <Quality.rst>`_.
2. Have a maintainer merge the reviewed changes.
3. Publish the reviewed revision through the selected host.
4. Check the catalogue, artwork, basket, dialog, and narrow-screen layout at
   the deployed URL; verify assets return successful responses.
5. To roll back, redeploy the last known-good revision or revert the offending
   change through a reviewed pull request.

This is only suitable for a public demo. A real manufacturer would need
validated safety claims, privacy review, an authenticated backend, appropriate
monitoring, and a secure fulfillment process before accepting requests.
