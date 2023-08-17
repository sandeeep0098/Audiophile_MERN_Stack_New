import connectMongoDB from '@/libs/mongodb';
import User from '@/models/form-details';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const {
    username,
    email,
    mobile_no,
    address,
    zip_code,
    cvv,
    city,
    country,
    cod,
    emoney,
    cardHolderName,
  } = await request.json();
  await connectMongoDB();
  await User.create({
    username,
    email,
    mobile_no,
    address,
    zip_code,
    cvv,
    city,
    country,
    cod,
    emoney,
    cardHolderName,
  });

  return NextResponse.json({ Message: 'Success' }, { status: 201 });
}
