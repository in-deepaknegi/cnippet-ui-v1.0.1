import { NextResponse } from "next/server";

import connectDb from '@/library/mongo';
import User from '@/models/googleUser';

export async function POST(request) {
    const { name, email } = await request.json();

    await connectDb();
    await User.create({ name, email });

    return NextResponse.json({
        message: "User Registered"
    },
        { status: 201 }
    );
}
