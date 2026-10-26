# Arts Council of Pakistan, Karachi: website redesign (static prototype)

A ready-to-host static site: the redesigned Arts Council website with the World Culture Festival page built in and the
full ticketing journey (book, sign in, checkout, payment result, e-tickets, My tickets, dashboard).

## Deploy

No build step and no server code. Upload the contents of this folder to any static host.

- **Netlify:** drag the folder onto app.netlify.com/drop.
- **Vercel:** `vercel deploy` from this folder, or import it as a project with no framework and no build command.
- **GitHub Pages:** push the folder to a repository and turn on Pages for that branch.
- **Any web server (Apache, Nginx, cPanel):** copy the files into the web root or into a subfolder.

All paths are relative, so the site also works from a subfolder such as `example.com/redesign/`.
Pages use `#` addresses (`/#/events`, `/#/festival/wcf`), so no rewrite rules are needed.
It must be served over http(s); opening `index.html` from the disk also works, but some browsers limit that.

## What's in it

```
index.html          the main site (all pages are # routes inside it)
assets/site.css     styles
assets/app.js       pages, ticketing journey, festival hand-off
assets/events.js    the 95 upcoming published events, read from acpkhi.com on 26 Oct 2026
assets/art.js       festival emblem and pattern used on the main site
wcf/index.html      the World Culture Festival page, shown at /#/festival/wcf
404.html            sends old-style links (/events, /event/...) to the matching # route
robots.txt          keeps the prototype out of search engines (pages also carry noindex)
```

Photos, the ACP logo and partner badges load from acpkhi.com and its image bucket, and fonts from Google Fonts,
so the site needs an internet connection.

## Before you share it publicly

This is a working prototype, not the production system:

- **Sign-in is simulated.** Any email with a password of 6+ characters signs in. Nothing is sent anywhere.
- **Payment is a stand-in** for the provider's hosted page, with success, failure and pending outcomes. No card details are asked for and nothing is charged.
- **Orders, tickets and profiles are kept only in the visitor's browser** (localStorage key `acp-proto`).
- **QR codes are drawings**, not valid for entry.
- **Event data is a snapshot.** Prices are the ones on each live booking page; festival shows that are not yet on acpkhi.com show sample prices, marked as such.

## Moving it into the live app

Every screen sits on the same path as the live React app (`/events`, `/event/:id`, `/ticket-booking/:id`, `/login`,
`/checkout/:id`, `/payment-result`, `/ticket-success/:orderNumber`, `/my-tickets`, `/dashboard`, `/festival/wcf`).
Keep the existing Supabase auth, `ticketService`, `useMyTickets` and the payment redirect, and apply this presentation
to the matching components. The notes at the top of `index.html` list what each screen keeps from the live app.
