import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search';
import ClientsTable from '../components/clientsTable';
import CreateButton from '../components/createButton';
import { getClients } from '../../pages/api/client/getAll';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const clients = await getClients(search); 

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Clientes</Title>
      <Text>
        Lista de clientes cadastrados no sistema.
      </Text>
      <div className="flex items-center space-x-4">
        <Search />
        <CreateButton clients={clients} />
      </div>
      <Card className="mt-6">
        <ClientsTable clients={clients} />
      </Card>
    </main>
  );
}
