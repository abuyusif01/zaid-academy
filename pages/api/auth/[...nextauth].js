import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Custom Provider",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const instructorRef = collection(db, "instructors");
          const q = query(
            instructorRef,
            where("email", "==", credentials.email)
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });

          return { ...res.data, email: credentials.email };
        } catch (error) {
          const errorMessage = error.response.data.message;
          throw new Error(errorMessage);
        }
      },
    }),
  ],
});
