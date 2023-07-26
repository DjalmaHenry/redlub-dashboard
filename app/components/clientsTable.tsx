'use client';

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { Client } from '../../@types/clients';
import { TrashIcon } from '@heroicons/react/24/outline';

export default async function ClientsTable({ clients }: { clients: Client[] }) {

  async function handleDeleteClient(id: number | undefined) {
    if (typeof id === 'undefined') {
      console.error('Client ID is undefined');
      return;
    }
  
    try {
      const response = await fetch('/api/client/delete', { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId: id })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  }  

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell><TrashIcon className="h-5 w-5" /></TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Responsável</TableHeaderCell>
          <TableHeaderCell>E-mail</TableHeaderCell>
          <TableHeaderCell>Telefone</TableHeaderCell>
          <TableHeaderCell>Endereço</TableHeaderCell>
          <TableHeaderCell>Região</TableHeaderCell>
          <TableHeaderCell>Tipo de resíduo</TableHeaderCell>
          <TableHeaderCell>Pagamento</TableHeaderCell>
          <TableHeaderCell>Última coleta</TableHeaderCell>
          <TableHeaderCell>Próxima coleta</TableHeaderCell>
          <TableHeaderCell>Observação</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>
              <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={() => handleDeleteClient(client.id)}
              />
            </TableCell>
            <TableCell>
              <Text>{client.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.manager}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.phone}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.address}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.region}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.wasteType}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.payment}</Text>
            </TableCell>
            <TableCell>
              <Text>
                {new Date(client.lastCollection).toLocaleDateString('pt-BR')}
              </Text>
            </TableCell>
            <TableCell>
              <Text>{client.daysToNextCollection}</Text>
            </TableCell>
            <TableCell>
              <Text>{client.observation}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
