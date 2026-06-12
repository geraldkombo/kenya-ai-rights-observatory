You are helping a Kenyan digital rights platform rename confusing labels so any Kenyan can understand them without explanation. This is a real project at https://geraldkombo.github.io/kenya-digital-rights-atlas/

## The problem

Users don't understand what the five dimension labels mean. Every label has been misunderstood:

- "Platform impact" → user had no idea what this meant
- "Content controls" → user thought it was about content creators (streamers, TikTokers)
- "Post removals" → user said "post might look like an electricity pole" (in Kenyan English, "post" = utility pole)

## The five dimensions that need names

The platform scores 47 counties on five digital rights risks. Each needs a label (1-3 words) that a regular Kenyan would understand immediately.

1. **Surveillance** — Currently "Surveillance Systems" and "CCTV Density". Measures how much the county is watched: CCTV cameras, known surveillance systems. Pairs with CCTV density number.

2. **Internet health** — Currently "Internet health". Measures internet shutdowns, throttling, outages in hours per year.

3. **Data privacy** — Currently "Data privacy". Measures data protection complaints filed with the national commissioner. Pairs with complaint count.

4. **Biometric enrollment** — Currently "Biometric". Measures how many people are enrolled in government ID and biometric systems (Huduma Namba, Maisha Namba).

5. **The one that keeps failing** — This one tracks social media platform transparency reports. It measures how many posts, accounts, or pages Facebook/X/TikTok/Google removed or restricted in Kenya. High score = more removals happening in that county.

## Constraints

- Short (1-3 words) — fits in a table column header and a progress bar label
- Plain Kenyan English — no academic terms, no tech jargon
- Self-explanatory — someone seeing it for the first time should get it
- Not confusing with other things ("post" = electricity pole, "content" = creator content, "platform" = vague)

## What to output

For each dimension:
1. The best label
2. A one-sentence plain-language explanation of what it measures
3. Why this label works for a Kenyan audience

Send the answer as a markdown table or list I can paste directly into the codebase.
