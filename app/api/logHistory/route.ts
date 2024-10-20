import { NextRequest, NextResponse } from 'next/server';

// Handle POST requests
export async function POST(request: NextRequest) {
  try {
    const { url, title, visitTime } = await request.json();

    // Logging the data
    console.log(`Received URL: ${url}, Title: ${title}, Visit Time: ${visitTime}`);

    // Return success response
    return NextResponse.json({ status: 'success', url, title, visitTime });
  } catch (error) {
    console.error('Error processing request:', error);

    // Return error response
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

// Optionally, you can add a handler for GET requests if needed
export async function GET() {
  return NextResponse.json({ message: 'GET request received' });
}
