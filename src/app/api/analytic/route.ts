import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('tracking_events');

    // Upsert by sessionId
    const { sessionId, type, ...rest } = data;
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing tracking data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Configure CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
} 