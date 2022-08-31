import { google } from "googleapis";
const sheets = google.sheets("v4");

async function handler(req, res) {
  if (req.method === "POST") {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GENUINE_CLIENT_EMAIL,
      null,
      process.env.GENUINE_FORMS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );

    const readData = await sheets.spreadsheets.values.get({
      auth: jwt,
      spreadsheetId: process.env.GENUINE_DATABASE_ID,
      range: "genuine",
    });

    const today = new Date();
    const thisYear = today.getFullYear();
    const RefNo =
      thisYear.toString().substring(2) +
      "000" +
      (readData.data.values.length + 1);
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const address = req.body.address;
    const contact = req.body.contact;
    const email = req.body.email;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GENUINE_DATABASE_ID,
      range: "genuine",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [
          [
            Timestamp,
            name,
            contact,
            address,
            email
          ],
        ],
      },
    });
    const data = JSON.stringify(response);
    console.log(data);
    res.status(201).json(data);
  } else {
    res.status(200).json({ message: "error" });
  }
}

export default handler;
