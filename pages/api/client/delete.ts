import { NextApiRequest, NextApiResponse } from 'next';
import 'server-only';
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
    const { clientId } = req.body;
    await queryBuilder
      .deleteFrom('clients')
      .where('id', '=', clientId)
      .execute();

    res.status(200).json({ message: 'Client deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
