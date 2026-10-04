# SIDEQUEST

A five-page student website for **Web Technologies 1**, group **IT-2511**.

Team: Yerkebulan Abenov, Assan Nurbergen, Kuvandyk Bekarys.

## Open the website

Open `index.html` in a browser. The pages, Bootstrap, fonts, and images are local, so there is no install or build step.

The website uses HTML, CSS, and a small JavaScript file. Images, fonts, and Bootstrap are supporting assets. Python is not part of the website.

## Pages and assigned owners

| Page | Files | Assigned owner |
| --- | --- | --- |
| Home | `index.html`, `css/home.css` | Yerkebulan |
| Community | `community.html`, `css/community.css` | Yerkebulan |
| Game catalog | `games.html`, `css/games.css` | Nurbergen |
| Emberwake | `emberwake.html`, `css/emberwake.css` | Nurbergen |
| Studio | `studio.html`, `css/studio.css` | Bekarys |

Shared styles are in `css/style.css`. Small interactions are in `js/site.js`.

Each page owner should review their files, make their own changes where needed, and commit using their own GitHub account. The assigned roles are a handoff plan, not a record of work already completed by each person.

## What works

- Shared responsive Bootstrap navigation.
- Game filtering by genre.
- A local saved-game list for Emberwake.
- A Bootstrap FAQ accordion.
- A validated community form that saves preferences in the browser.
- Game comparison and meetup tables.

The form does not send data or register people for an event. All games are concepts, with no downloadable builds.

## Publish on GitHub Pages

After all team members have pushed their reviewed files:

1. Open the repository's **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. Wait for GitHub Pages to finish and check all five pages.

Publication address: https://abenovv.github.io/Midterm-Web_Technologies-1stTerm/

This address is not confirmed live until the repository is published. The report must be updated to reflect the final deployment and actual contributions before submission.

## Report and screenshots

The DOCX report is in `docs/`. Real Chromium screenshots are in `docs/screenshots/`, at widths 375, 768, and 1280 pixels. `docs/validation.json` contains the browser check results.

The `scripts/` folder contains preparation tools and is excluded from Git. It is not needed to open or publish the website. A clean copy containing only the website and its supporting assets is in `handoff/website/` and `handoff/Website-HTML-CSS-JS.zip`.

## Credits

Original game concept artwork was made using OpenAI image generation. Bootstrap 5.3.8 is MIT-licensed. DM Sans is under the SIL Open Font License. License files are included next to the fonts and Bootstrap files. See `studio.html#credits` and `docs/ARTWORK.md`.
