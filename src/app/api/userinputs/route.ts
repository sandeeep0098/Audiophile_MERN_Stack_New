import connectMongoDB from '@/libs/mongodb';
import User from '@/models/form-details';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const {
    enteredName,
    enteredEmail,
    enteredPhoneNumber,
    enteredAddress,
    enteredCity,
    enteredZipCode,
    enteredCountry,
    enteredCardNo,
    enteredCvv,
    enteredCardHolderName,
    paymentMethod,
  } = await request.json();
  await connectMongoDB();
  await User.create({
    enteredName,
    enteredEmail,
    enteredPhoneNumber,
    enteredAddress,
    enteredCity,
    enteredZipCode,
    enteredCountry,
    paymentMethod,
    enteredCardNo,
    enteredCvv,
    enteredCardHolderName,
  });

  return NextResponse.json({ Message: 'Success' }, { status: 201 });
}
