import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from '../components/search';
import ClientsTable from '../components/clientsTable';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const clients = await queryBuilder
    .selectFrom('clients')
    .select(['id', 'name', 'manager', 'email', 'phone', 'address', 'region', 'wasteType', 'payment', 'lastCollection', 'daysToNextCollection', 'observation'])
    .where('name', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Clientes</Title>
      <Text>
        Lista de clientes cadastrados no sistema.
      </Text>
      <Search />
      <Card className="mt-6">
        <ClientsTable clients={clients} />
      </Card>
    </main>
  );
}
