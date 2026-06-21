import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter" 
import mongoClientPromise from "@/lib/mongoClientPromise";
import userModel from "@/models/user-model";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut, 
    
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if(credentials == null)return null;
        try{  
          const email = credentials?.email?.trim();
          const user = await userModel.findOne({ email }); 
          if (user) {
            const isMatch = user?.password === credentials.password;
            // console.log(user, credentials.password, isMatch);
            if (isMatch) {
              return user;
            } else {
              console.log("Invalid password or email");
            }
          }
          else{
            console.log("User not found");
          }
        }catch(err){
          console.log(err);
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],
  adapter: MongoDBAdapter(mongoClientPromise),
});