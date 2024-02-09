import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

import connectDb from '@/library/mongo';
import User from '@/models/googleUser';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === "google") {
                const { name, email } = user;
                console.log(user);
                try {
                    await connectDb();

                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        const URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
                        const res = await fetch(`${URL}/api/user`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                    },
                            body: JSON.stringify({
                                name,
                                email,
                            })
                        });
        
                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }