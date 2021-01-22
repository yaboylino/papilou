import { verify } from "argon2"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { serverRuntimeConfig } from "../../../next.config"
import { User } from "../../../config/db"

const options = {
  pages: {
    signIn: "/login",
    signOut: "/register"
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com"
        },
        wachtwoord: { label: "Wachtwoord", type: "password" }
      },
      authorize: async credentials => {
        const existingUser = await User.findOne({ email: credentials.email })
        if (await verify(existingUser.wachtwoord, credentials.wachtwoord)) {
          return existingUser.toObject()
        }
        return null
      }
    })
  ],

  callbacks: {
    /**
     * We define those two callbacks to have our actual
     * user in the session because by default next-auth
     * uses some arbitrary user object with arbitrary fields with
     * no other way to override it
     */
    jwt: async (token, user, account, profile, isNewUser) => {
      if (!user) {
        return token
      }
      const { wachtwoord, __v, ...tokenUser } = user
      return Promise.resolve(tokenUser)
    },
    session: async (session, user, sessionToken) => {
      session.user = user
      console.log(session)
      return Promise.resolve(session)
    }
  },

  // A database is optional, but required to persist accounts in a database
  database: serverRuntimeConfig.databaseUrl
}

export default (req, res) => NextAuth(req, res, options)
