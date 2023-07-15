<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/DjalmaHenry/redlub-dashboard/assets/45500812/a0188fa0-1439-43d8-8c8f-31fb9c64959e">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/DjalmaHenry/redlub-dashboard/assets/45500812/cd79f983-5e40-4121-b557-009b8e692077">
  <img alt="RedLub Dashboard" src="https://github.com/DjalmaHenry/redlub-dashboard/assets/45500812/cd79f983-5e40-4121-b557-009b8e692077">
</picture>

<div align="center"><strong>RedLub Dashboard</strong></div>
<div align="center">Built with the Next.js 13</div>
<br />

## Overview

Technologies used:

- Framework - [Next.js 13](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Database - [PlanetScale](https://planetscale.com)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so)
- Icons - [HeroIcons](https://heroicons.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

## Getting Started

After creating an account with PlanetScale, you'll need to create a new database and retrieve the `DATABASE_URL`. Optionally, you can use Vercel integration, which will add the `DATABASE_URL` to the environment variables for your project.

This is the provided `.env.local.example` file, which you'll want to use to create your own `.env.local` file:

```
# https://vercel.com/integrations/planetscale
DATABASE_URL=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

# https://next-auth.js.org/providers/github
GITHUB_ID=
GITHUB_SECRET=
```

Next, inside PlanetScale, create a users table based on the schema defined in this repository.

```
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255),
  `username` varchar(255),
  PRIMARY KEY (`id`)
);
```

Insert a row for testing:

```
INSERT INTO `users` (`id`, `email`, `name`, `username`) VALUES (1, 'me@site.com', 'Me', 'username');
```

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
