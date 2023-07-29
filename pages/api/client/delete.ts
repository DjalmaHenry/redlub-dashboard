import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Client } from '../../../@types/clients';

interface Database {
  clients: Client;
}

export async function deleteClient(id: number): Promise<void> {
  const queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: process.env.DATABASE_URL
    })
  });

  console.log(process.env.DATABASE_URL);

  await queryBuilder
    .deleteFrom('clients')
    .where('id', '=', id)
    .execute();
}
