import { NextApiRequest, NextApiResponse } from 'next';
import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { Client } from '../../../@types/clients';

interface Database {
  clients: Client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: process.env.DATABASE_URL
    })
  });

  try {
    const search = req.query.q ?? '';
    const clients = await queryBuilder
      .selectFrom('clients')
      .select(['id', 'name', 'manager', 'email', 'phone', 'address', 'region', 'wasteType', 'payment', 'lastCollection', 'daysToNextCollection', 'observation'])
      .where('name', 'like', `%${search}%`)
      .execute();

    res.status(200).json(clients);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
