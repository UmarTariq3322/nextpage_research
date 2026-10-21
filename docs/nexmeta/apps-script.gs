/**
 * NexMeta registrations → Google Sheet (+ payment screenshots → Google Drive).
 *
 * Paste this into Extensions → Apps Script of the Google Sheet that should
 * receive registrations, set SECRET below, then deploy as a Web app.
 * Full steps: docs/nexmeta/SETUP.md
 */

// Must exactly match NEXMETA_WEBHOOK_SECRET in the website's environment.
const SECRET = "PASTE-THE-SAME-LONG-RANDOM-SECRET-HERE";

const SHEET_NAME = "Registrations";
const FOLDER_NAME = "NexMeta payment proofs";

const HEADERS = [
  "Registration ID",
  "Submitted at",
  "Status",
  "Full name",
  "Email",
  "WhatsApp",
  "Institution",
  "Level",
  "City",
  "Package",
  "Ambassador code",
  "Subtotal (PKR)",
  "Discount (PKR)",
  "Total (PKR)",
  "Paid via",
  "Transaction ID",
  "Payment screenshot",
  "Heard from",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

    const sheet = getSheet();
    let proofUrl = "";
    if (data.proof && data.proof.base64) {
      const blob = Utilities.newBlob(
        Utilities.base64Decode(data.proof.base64),
        data.proof.type,
        data.registrationId + " - " + data.proof.name
      );
      proofUrl = getFolder().createFile(blob).getUrl();
    }

    sheet.appendRow([
      data.registrationId,
      new Date(data.submittedAt),
      "Pending verification",
      data.name,
      data.email,
      // Leading apostrophe keeps phone numbers as text (no lost "+" or zeros).
      "'" + data.whatsapp,
      data.institution,
      data.level,
      data.city,
      data.package,
      data.ambassadorCode,
      data.subtotal,
      data.discount,
      data.total,
      data.paymentMethod,
      "'" + data.transactionId,
      proofUrl,
      data.heardFrom,
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function getFolder() {
  const folders = DriveApp.getFoldersByName(FOLDER_NAME);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(FOLDER_NAME);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to grant permissions and create the sheet + folder. */
function setup() {
  getSheet();
  getFolder();
}
