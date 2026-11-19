# Running a Kyun pilot

## Simplest: reports on WhatsApp (works today, no setup)
Parents open **Library → For Parents → Send pilot report**. It sends an anonymous summary like:

```
Kyun pilot report (anonymous #4y00bbbm)
Using Kyun for 6 days, opened on 5 of them
Last 7 days: 5 active days, 74 min, 23 stories, 14/19 answers right, 3 shares
All time: 74 min, 23 stories, best streak 4, level Detective
Came back next day: yes · after a week: n/a
```
No names, no list of stories, no device details. Ask each family to send it on day 3 and day 8.

## Automatic: anonymous daily totals into a Google Sheet (recommended)
1. Create a Google Sheet, open **Extensions → Apps Script**, paste `docs/pilot-sheet.gs`.
2. **Deploy → New deployment → Web app**, "Execute as: Me", "Who has access: Anyone". Copy the `/exec` URL.
3. Put the URL in `PILOT_URL` in `app/main.js` (PILOT STATS section), rebuild and deploy.
4. Share pilot links like `https://…/kyun/?p=school-a`. Opening one switches reporting on for that device and tags its group.
   Plain links send nothing. Parents can switch it off in Library → For Parents.
5. Open the `/exec` URL in a browser for the live dashboard (kids started, next-day and 7-day return, median minutes, per group).

The app sends today's running totals when the kid leaves the app and every 3 minutes while open, and finalises earlier days on the next visit.
The sheet keeps one row per kid per day. Fields: anonymous id, group, day, day number since first use, seconds, stories, answers, right, shares, opens, region, level, streak.
