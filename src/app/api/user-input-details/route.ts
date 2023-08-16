import connectMongoDB from '@/libs/mongodb';
import User from '@/models/form-details';
import { NextResponse } from 'next/server';

export async function createUser(request) {
  const {
    username,
    email,
    mobile_no,
    address,
    city,
    number,
    country,
    cod,
    emoney,
    card_no,
    cvv,
    cardHolderName,
  } = await request.json();

  try {
    await connectMongoDB();
    await User.create({
      username,
      email,
      mobile_no,
      address,
      city,
      number,
      country,
      cod,
      emoney,
      card_no,
      cvv,
      cardHolderName,
    });

    return NextResponse.json(
      { Message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { Error: 'User creation failed' },
      { status: 500 }
    );
  }
}
