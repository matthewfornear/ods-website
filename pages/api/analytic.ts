import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('tracking_events');

    // Upsert by sessionId
    const { sessionId, type, ...rest } = data;
    if (!sessionId) {
      return res.status(400).json({ error: 'Missing sessionId' });
    }

    if (type === 'pageview') {
      // Push pageview into array
      await collection.updateOne(
        { sessionId },
        {
          $setOnInsert: { sessionId, customerId: data.customerId, createdAt: new Date() },
          $push: { pageviews: { ...rest, timestamp: rest.timestamp || new Date().toISOString() } },
          $set: { updatedAt: new Date() }
        },
        { upsert: true }
      );
    } else {
      // For other event types, you can push to a different array or handle as needed
      await collection.updateOne(
        { sessionId },
        {
          $setOnInsert: { sessionId, customerId: data.customerId, createdAt: new Date() },
          $push: { events: { type, ...rest, timestamp: rest.timestamp || new Date().toISOString() } },
          $set: { updatedAt: new Date() }
        },
        { upsert: true }
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing tracking data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 