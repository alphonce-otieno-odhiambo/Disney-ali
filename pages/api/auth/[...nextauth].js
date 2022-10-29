import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
//   secret: process.env.NEXTAUTH_SECRET,
  pages: {
      signIn: "/auth/signin",
  },
  // callbacks:{
  //   async session({session, token , user}){

  //     session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
  //     session.user.uid = token.sub;
  //     return session;
  //   },
  // },
});