import connectMongoDB from '@/libs/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const {
//     slug,
//     name,
//     image,
//     category,
//     categoryImage,
//     new: isNew,
//     price,
//     description,
//     features,
//     includes,
//     gallery,
//     others,
//   } = await request.json();
//   await connectMongoDB();
//   await Product.create({
//     slug,
//     name,
//     image,
//     category,
//     categoryImage,
//     new: isNew,
//     price,
//     description,
//     features,
//     includes,
//     gallery,
//     others,
//   });

//   return NextResponse.json({ Message: 'Success' }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const products = await Product.find().lean();

  return NextResponse.json({ products });
}
