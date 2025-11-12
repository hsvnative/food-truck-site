import 'dotenv/config';
import { google } from 'googleapis';

export async function handler() {
  try {
    const {
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REFRESH_TOKEN,
      GOOGLE_CALENDAR_ID,
    } = process.env;

    const oAuth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET
    );
    oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    const res = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res.data.items || []),
    };
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch calendar events' }),
    };
  }
}
