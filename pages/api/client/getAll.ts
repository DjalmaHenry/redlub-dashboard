import { NextApiRequest, NextApiResponse } from 'next';
import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Client } from '../../../@types/clients';

interface Database {
  clients: Client;
}

export async function getClients(search: string): Promise<Client[]> {
  const queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: process.env.DATABASE_URL
    })
  });

  const clients = await queryBuilder
    .selectFrom('clients')
    .select(['id', 'name', 'manager', 'email', 'phone', 'address', 'region', 'wasteType', 'payment', 'lastCollection', 'daysToNextCollection', 'observation'])
    .where('name', 'like', `%${search}%`)
    .execute();

  return clients;
}
