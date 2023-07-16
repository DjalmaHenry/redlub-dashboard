import NextAuth, { Session, SessionOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = {
          id: '1',
          name: 'Admin',
          email: process.env.USER_EMAIL,
          image: 'https://example.com/avatar.jpg'
        };

        // credentials.email, credentials.password verify by process.env.USER_EMAIL and process.env.USER_PASSWORD
        if (
          credentials &&
          credentials.email === process.env.USER_EMAIL &&
          credentials.password === process.env.USER_PASSWORD
        ) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  pages: {
    signIn: '/',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/'
  },
  debug: true,
  callbacks: {
    async session(params) {
      const session: Session = params.session;
      const user: User = params.user;
      session.user = user;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 dias
  } as Partial<SessionOptions>
});





