import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Client } from '../@types/clients';

interface Database {
  clients: Client;
}

let queryBuilder: Kysely<Database> | null = null;

if (typeof window === 'undefined') {
  require('server-only');
  
  queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: process.env.DATABASE_URL
    })
  });
}

export { queryBuilder };
