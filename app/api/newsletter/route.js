import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import connectDb from '@/modules/library/mongo';
import NewsletterModel from '@/modules/models/newsletter.js';

export async function POST(req) {
    const { email } = await req.json();

    try {
        await connectDb();

        //check if the email is already present in the database
        const existingEmail = await NewsletterModel.findOne({ email });

        if (existingEmail) {
            return NextResponse.json({
                msg: ["🌟 Welcome back, valued customer. We're thrilled to have you with us again!"],
                success: false,
            })
        }

        //create a new record if the email does not exist
        await NewsletterModel.create({ email, });

        return NextResponse.json({
            msg: ['🚀Email subscribed successfully. Welcome aboard!'],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];

            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList)
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: "Unable to subscribe" });
        }
    }
}