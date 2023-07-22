'use client';
import React, { use } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search';
import ClientsTable from '../components/clientsTable';
import CreateButton from '../components/createButton';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { setSearchState } from '../hooks/useSearchState';

export default function IndexPage() {
  const [searchParam] = useSearchParams()?.getAll('q') || [];
  setSearchState(true);
  let q = searchParam || '';
  if (Array.isArray(q)) {
    q = q[0] || '';
  }
  const data = use(
    fetch(`/api/client/getAll?q=${encodeURIComponent(q)}`).then((r) => r.json())
  );
  setSearchState(false);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Clientes</Title>
      <Text>
        Lista de clientes cadastrados no sistema.
      </Text>
      <div className="flex items-center space-x-4">
        <Search />
        <CreateButton clients={data} />
      </div>
      <Card className="mt-6">
        <ClientsTable clients={data} />
      </Card>
    </main>
  );
}
