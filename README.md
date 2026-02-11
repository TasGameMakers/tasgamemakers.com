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

Create a new `.md` file in `content/events/`. The filename becomes the last part of the URL, and the date from the front matter is added automatically. For example, a file called `march-social-meetup.md` with a date of `2026-03-05` becomes:

```
https://tasgamemakers.com/events/2026/03/05/march-social-meetup/
```

So keep filenames short, lowercase, and hyphenated (e.g. `my-cool-event.md`).

### All front matter fields

Here is every available field with comments explaining what it does, whether it's required, and example values:

```yaml
---
# REQUIRED FIELDS

title: "Event Name"                          # Required. The event title, displayed everywhere.
date: 2026-04-01T18:00:00+11:00              # Required. Start date/time with timezone.
                                             # Use +11:00 for AEDT (Nov–Mar) or +10:00 for AEST (Apr–Oct).
                                             # Also determines the event URL: /events/YYYY/MM/DD/slug/

# OPTIONAL — DATES & TIMES

end_date: 2026-04-01T20:00:00+11:00          # Optional. End date/time. Shows a time range on the page.
                                             # If the end date is a different day, shows a date range
                                             # (e.g. "Apr 17 – Apr 18, 2026").
date_display: "17 & 18 April 2026"           # Optional. Overrides the automatic date text completely.
                                             # Use for multi-day events where the auto format doesn't
                                             # look right.
time_display: "11:00 AM – 4:00 PM each day"  # Optional. Overrides the automatic time text completely.
                                             # Use for multi-day events with complex schedules.
event_days:                                  # Optional. For multi-day events only. Creates a separate
  - start: 2026-04-17T11:00:00+10:00         # calendar entry for each day in the .ics calendar feed
    end: 2026-04-17T16:00:00+10:00           # and the "Add to Calendar" download. Without this,
  - start: 2026-04-18T11:00:00+10:00         # multi-day events appear as one long calendar entry
    end: 2026-04-18T16:00:00+10:00           # spanning the full range.

# OPTIONAL — DESCRIPTION & CLASSIFICATION

summary: "A short description of the event." # Optional. Shown on event cards (truncated to 100 chars)
                                             # and in the calendar feed description.
event_type: "social"                         # Optional. Category for the event. Not displayed on the
                                             # site, but used for classification. Common values:
                                             # "social", "workshop", "showcase", "expo", "conference",
                                             # "agm"
featured: true                               # Optional. Set to true to feature this event in the
                                             # homepage hero section. If no event is featured, the
                                             # homepage uses the next upcoming event instead.

# OPTIONAL — LOCATION & MAP

location: "Venue Name, City"                 # Optional. Venue name shown on event cards and the
                                             # event page. For online events, use "Discord".
address: "PW1 Hobart Tasmania"               # Optional. Physical address used to generate an embedded
                                             # OpenStreetMap and a "Get Directions" Google Maps link.
                                             # Use a simple, geocodable string — not a full formatted
                                             # address. Only renders if provided.

# OPTIONAL — IMAGE

image: "my-event.png"                        # Optional. Filename from /assets/media/images/.
                                             # Used as the hero background on the event page and
                                             # as the thumbnail on event cards. If omitted, the event
                                             # page and card will have no image (still works fine).
                                             # See "Event images" section below for reusable images.

# OPTIONAL — COST

cost: "Free"                                 # Optional. Displayed as-is on the event page meta section.
                                             # Freeform text — e.g. "Free", "$10", "Free for members".

# OPTIONAL — BUTTONS & ACTIONS (choose one approach)
#
# These control the call-to-action on the event page. Priority order:
#   1. discord_url  → shows "Join us on Discord" button
#   2. action_url   → shows a custom button (with action_label text)
#   3. drop_in      → shows "Just turn up!" badge (no link)
#   4. (none)       → no button shown

drop_in: true                                # Optional. Set to true for casual events with no
                                             # registration. Shows a "Just turn up!" badge on event
                                             # cards and the event page.
action_url: "https://example.com/register"   # Optional. URL for a registration or external link
                                             # button on the event page.
action_label: "Register Now"                 # Optional. Button text for action_url. Defaults to
                                             # "More Info" if not set.
discord_url: "https://discord.gg/Y7xtu4z"    # Optional. Shows a "Join us on Discord" button.
                                             # Use for online/Discord events.

# OPTIONAL — PHOTO GALLERY (for past events)

photos:                                      # Optional. Array of photos to display in a gallery
  - src: "event-photo-1.jpg"                 # section at the bottom of the event page.
    alt: "Description of the photo"          # src: filename from /assets/media/images/
  - src: "event-photo-2.jpg"                 # alt: accessible description of the image
    alt: "Another photo description"
---

Event body content goes here as regular markdown.
```

### Quick reference table

| Field | Type | Required | Where it appears |
|---|---|---|---|
| `title` | String | Yes | Everywhere — cards, page header, calendar feed |
| `date` | DateTime | Yes | Cards, page, calendar feed, URL |
| `end_date` | DateTime | No | Cards, page (time range), calendar feed |
| `date_display` | String | No | Overrides date text on cards and page |
| `time_display` | String | No | Overrides time text on cards and page |
| `event_days` | Array | No | Calendar feed only (separate entries per day) |
| `summary` | String | No | Event cards (truncated to 100 chars), calendar feed |
| `event_type` | String | No | Not displayed — internal classification only |
| `featured` | Boolean | No | Homepage hero selection logic |
| `location` | String | No | Cards, event page, calendar feed |
| `address` | String | No | Event page (embedded map + Google Maps link) |
| `image` | String | No | Event page hero, card thumbnail |
| `cost` | String | No | Event page meta section only |
| `drop_in` | Boolean | No | Cards (badge), event page (badge) |
| `action_url` | String | No | Event page (button) |
| `action_label` | String | No | Event page (button text, defaults to "More Info") |
| `discord_url` | String | No | Event page (button) |
| `photos` | Array | No | Event page (gallery section) |

### Example: social meetup (no registration)

```yaml
---
title: "March Social Meetup (Hobart)"
date: 2026-03-05T17:30:00+11:00
summary: "Our regular social meetup."
location: "A Hobart Pub"
event_type: "social"
image: "social-nipaluna.png"
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

### Example: online event on Discord

```yaml
---
title: "Online Showcase"
date: 2026-02-20T19:00:00+11:00
end_date: 2026-02-20T21:00:00+11:00
summary: "Show off what you've been working on and see what others have made."
location: "Discord"
event_type: "showcase"
drop_in: true
image: "showcase.png"
discord_url: "https://discord.gg/Y7xtu4z"
---
```

### Example: multi-day event

```yaml
---
title: "Level Up Tasmania Expo"
date: 2026-04-17T11:00:00+10:00
end_date: 2026-04-18T16:00:00+10:00
date_display: "17 & 18 April 2026"
time_display: "11:00 AM – 4:00 PM each day"
event_days:
  - start: 2026-04-17T11:00:00+10:00
    end: 2026-04-17T16:00:00+10:00
  - start: 2026-04-18T11:00:00+10:00
    end: 2026-04-18T16:00:00+10:00
summary: "A two-day public expo showcasing Tasmanian game development talent."
location: "PW1, 1 Hunter Street, Hobart"
address: "PW1 Hobart Tasmania"
event_type: "expo"
image: "LUT-Color.png"
action_url: "https://www.screen.tas.gov.au/leveluptasmania"
action_label: "Visit Screen Tasmania"
---
```

The event body goes below the front matter as regular markdown.

### Timezone guide

Tasmania switches between AEST and AEDT:

| Period | Timezone | UTC offset | Use in front matter |
|---|---|---|---|
| First Sunday in April – First Sunday in October | AEST | +10:00 | `+10:00` |
| First Sunday in October – First Sunday in April | AEDT | +11:00 | `+11:00` |

The site automatically displays the correct timezone label (AEST/AEDT) based on the event date.

### Event images

The `image` field in front matter sets the header image for the event page and the thumbnail on event cards. It's just the filename — images are loaded from `/assets/media/images/`.

**Reusable images** — use these for recurring event types:

| Filename | Good for |
|---|---|
| `socialmeetup.png` | Social meetups (general) |
| `social-nipaluna.png` | Social meetups (nipaluna/Hobart) |
| `showcase.png` | Showcases |
| `workshop.png` | Workshops |
| `LUT-Color.png` | Level Up Tasmania events |
| `agm.png` | AGM events |

To use one, just set `image: "socialmeetup.png"` in the front matter.

**Custom images** — for a one-off event with its own artwork:

1. Drop the image file into `static/assets/media/images/`
2. Set `image: "your-filename.png"` in the event front matter

Keep filenames lowercase, no spaces (use hyphens). Any common format works (PNG, JPG, etc).

If you leave `image` out, the event page and card will just have no image — everything still works fine.

### Calendar feed

The site automatically generates an iCalendar feed at `/events/calendar.ics` that includes all events. Each event page also has an "Add to Calendar" button that downloads a `.ics` file for that specific event. The `summary`, `location`, `date`, and `end_date` fields are included in calendar entries. For multi-day events, use `event_days` to create separate calendar entries per day.

## Other files

| Path | What it is |
|---|---|
| `content/events/` | Event pages |
| `data/board.yml` | Board member info (shown on `/about-us/`) |
| `hugo.toml` | Site config (email, Discord URL, etc.) |
| `layouts/` | Hugo templates |
| `static/assets/` | CSS, JS, images, fonts, documents |
