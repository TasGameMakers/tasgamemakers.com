# Tas Game Makers Website

Source for [tasgamemakers.com](https://tasgamemakers.com). Site by [Paris](https:/hey.paris), inspired by the original by... ??

## Stack

- [Hugo](https://gohugo.io) static site generator
- Hosted on GitHub Pages
- Built and deployed automatically via GitHub Actions on push to `main`
- Analytics: [Umami](https://umami.is) (privacy-focused, no cookies)
- Newsletter: Mailchimp

## Local development

```
hugo server
```

The site will be available at `http://localhost:1313`, for example.

## Adding an event

Create a new `.md` file in `content/events/`. The filename becomes the URL slug.

### Front matter

```yaml
---
title: "Event Name"
date: 2026-04-01T18:00:00+11:00
end_date: 2026-04-01T20:00:00+11:00
summary: "A short description of the event."
location: "Venue Name, City"
event_type: "social"
image: "my-event.png"
---
```

`date` and `title` are required. Everything else is optional.

### Optional fields

| Field | What it does |
|---|---|
| `end_date` | End time. Shows a date range if it spans multiple days. |
| `summary` | Short description shown on cards and in the calendar feed. |
| `location` | Venue name shown on the page. |
| `address` | Address for the embedded map and Google Maps link (e.g. `"Salamanca Inn Hobart Tasmania"`). |
| `event_type` | Category: `social`, `workshop`, `showcase`, `expo`, `conference`, etc. |
| `image` | Image filename, relative to `/assets/media/images/`. |
| `cost` | e.g. `"Free"` or `"$10"`. |
| `drop_in` | Set to `true` to show "Just turn up!" instead of a registration button. |
| `action_url` | URL for a registration or external link button. |
| `action_label` | Button text (defaults to "More Info"). |
| `discord_url` | Shows a "Join us on Discord" button. |
| `external_url` | Link to an external event page. |
| `featured` | Set to `true` to feature on the homepage hero. |

### Example: social meetup (no registration)

```yaml
---
title: "March Social Meetup (Hobart)"
date: 2026-03-05T17:30:00+11:00
summary: "Our regular social meetup."
location: "A Hobart Pub"
event_type: "social"
image: "socialmeetup.png"
drop_in: true
---
```

### Example: workshop with registration

```yaml
---
title: "Your Game is a Business"
date: 2026-03-05T13:00:00+11:00
end_date: 2026-03-05T17:00:00+11:00
summary: "A workshop on game business development."
location: "Salamanca Inn, Hobart"
address: "Salamanca Inn Hobart Tasmania"
event_type: "workshop"
image: "workshop.png"
cost: "Free"
action_url: "https://www.eventbrite.com.au/e/your-event-123"
action_label: "Register Now"
---
```

The event body goes below the front matter as regular markdown.

### Event images

The `image` field in front matter sets the header image for the event page and the thumbnail on event cards. It's just the filename — images are loaded from `static/assets/media/images/`.

**Reusable images** — use these for recurring event types:

| Filename | Good for |
|---|---|
| `socialmeetup.png` | Social meetups |
| `showcase.png` | Showcases |
| `workshop.png` | Workshops |
| `LUT-Color.png` | Level Up Tasmania events |

To use one, just set `image: "socialmeetup.png"` in the front matter.

**Custom images** — for a one-off event with its own artwork:

1. Drop the image file into `static/assets/media/images/`
2. Set `image: "your-filename.png"` in the event front matter

Keep filenames lowercase, no spaces (use hyphens). Any common format works (PNG, JPG, etc).

If you leave `image` out, the event page and card will just have no image — everything still works fine.

## Other files

| Path | What it is |
|---|---|
| `content/events/` | Event pages |
| `data/board.yml` | Board member info (shown on `/about-us/`) |
| `hugo.toml` | Site config (email, Discord URL, etc.) |
| `layouts/` | Hugo templates |
| `static/assets/` | CSS, JS, images, fonts, documents |
