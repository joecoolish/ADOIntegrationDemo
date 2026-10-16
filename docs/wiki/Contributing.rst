Contributing
============

Your first contribution
-----------------------

1. Get repository access or fork it, then clone your copy.
2. Follow `Deployment <Deployment.rst>`_ and explore the demo before editing.
3. Choose an open issue and comment with your proposed approach so effort is
   not duplicated. Ask for clarification if acceptance criteria are unclear.
4. Create a focused branch, for example ``feature/catalogue-age-filter``.
5. Make the smallest complete change and update related Wiki instructions.
6. Run ``npm run check`` if Node.js is installed, then follow the manual
   checklist in `Quality <Quality.rst>`_.
7. Open a pull request describing the change, why it is needed, how it was
   checked, and screenshots for visual changes. Reference the issue number.
8. Request maintainer review, address feedback, and let a maintainer merge.

Conventions
-----------

Use plain HTML, CSS, and browser JavaScript. Keep runtime dependencies and
external network requests out unless a maintainer approves a concrete need.
Use semantic HTML, labeled controls, keyboard navigation, visible focus, and
responsive layouts. Keep product data in ``app.js`` and artwork in ``assets/``.
Never insert user input through ``innerHTML``; use ``textContent`` instead.

Do not commit credentials, real customer data, generated files, or dependencies.
Keep the simulation notices intact. Avoid unrelated formatting or refactoring.
All contributions must be yours to share; do not copy commercial product
photography or licensed artwork without permission.

Issues and ADO
--------------

Bug reports should include reproduction steps, expected and actual behavior,
browser/device information, and a screenshot when useful. Feature requests
should explain the user need and observable acceptance criteria.

If your team connects Azure Boards, follow your administrator's linking policy.
Where supported by that integration, ``AB#123`` can reference an existing
work item in a pull request. A GitHub issue number is not an Azure Boards ID;
do not invent work-item IDs or assume that this demo creates them.

Working together
----------------

Be kind, constructive, and specific. Discuss behavior and ideas, not people.
Contact maintainers through an issue for non-sensitive project concerns.
For vulnerabilities, follow the private reporting guidance in
`Security and support <Security-and-Support.rst>`_ instead.
