// /app/api/trackVisit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '@/config/firebase'; 



export async function POST(request: NextRequest) {
  const { url, timestamp } = await request.json();

    
  try {
    await addDoc(collection(db, 'visitedSites'), {
      url,
      timestamp: new Date(timestamp),
    });
    console.log(`Page visited: ${url} at ${timestamp}`);

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Failed to track visit' }, { status: 500 });
    }
    
  // Store the visited URL and timestamp in a database or a file
  

  
}
