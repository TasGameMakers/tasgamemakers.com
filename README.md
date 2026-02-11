# Tas Game Makers website

This repo contains the [Jekyll](https://jekyllrb.com) project that generates the [Tas Game Makers website](https://tasgamemakers.com).

## Common Tasks

### Update Configuration

Modify the `_config.yml` file, which controls things like the email address, Discord invite URL, and more.

### Adding a new event

Create a new file in the `_events` directory. The file must begin with the following [front matter](https://jekyllrb.com/docs/front-matter/):

```yaml
---
title: The Title Of This Event
summary: A single sentence describing the event.
date: 2019-07-06 # the date, in YYYY-MM-DD format
image: MyCoolEvent.png # relative to /assets/media/images/
category: jam # may be 'jam', 'talk', or 'play'
---
```

The front page will automatically show the last event (including events in the future).

### Updating the Board

Modify the file `_data/board.yml`, and add or edit any information you need in there. Doing this will update the page at `/about-us`.
