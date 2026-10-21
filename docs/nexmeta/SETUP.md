# NexMeta registration setup

Registrations from `/nexmeta` are saved as rows in a Google Sheet you own.
Payment screenshots go into a Google Drive folder, and their links appear in
the sheet. This takes about 10 minutes, once.

## 1. Create the Google Sheet and script

1. Create a new Google Sheet (for example "NexMeta registrations") with the
   Google account that should own the data.
2. Open **Extensions → Apps Script**.
3. Delete the sample code and paste everything from
   [`apps-script.gs`](./apps-script.gs).
4. Pick a long random secret (at least 32 characters, letters and numbers) and
   paste it into the `SECRET` line. Keep a copy; you need it in step 3.
5. Save. In the function dropdown choose **setup** and click **Run**. Approve
   the permissions it asks for (it needs your Sheet and Drive). This creates
   the "Registrations" tab and the "NexMeta payment proofs" Drive folder.

## 2. Deploy the script as a web app

1. Click **Deploy → New deployment**, type **Web app**.
2. **Execute as:** Me. **Who has access:** Anyone.
3. Click **Deploy** and copy the **Web app URL** (ends in `/exec`).

"Anyone" is required so the website can reach it. Requests without the
correct secret are rejected, and the URL is only ever stored on the server.

## 3. Configure the website

Set these environment variables wherever the site runs (for local testing,
put them in a `.env.local` file in the project root; on Vercel, under
**Project → Settings → Environment Variables**):

```
NEXMETA_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
NEXMETA_WEBHOOK_SECRET=the-same-secret-as-in-the-script
NEXMETA_AMBASSADOR_CODES=CODE1,CODE2,CODE3
```

- Ambassador codes are comma-separated and not case-sensitive. To add or
  remove a code, edit this variable and redeploy; no code change is needed.
- Restart `npm run dev` after editing `.env.local`.

Until these are set, the form explains that online registration isn't set up
yet and points students to WhatsApp.

## 4. Add your payment details

Open `content/nexmeta.ts` and fill in `paymentAccounts` (bank, JazzCash,
Easypaisa). While it is empty, the form asks students to request payment
details on WhatsApp.

## Day to day

- Each row starts with status **Pending verification**. After checking the
  screenshot and transaction ID, change it to **Confirmed** (or anything you
  like); the website never edits existing rows.
- The **Registration ID** (for example `NXM-261021-7KQ4`) is shown to the
  student after submitting, so they can quote it on WhatsApp.

If you change `apps-script.gs` later, use **Deploy → Manage deployments →
Edit → New version** so the URL stays the same.
