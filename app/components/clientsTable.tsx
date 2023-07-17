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

export default async function ClientsTable({ clients }: { clients: Client[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
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
                {client.lastCollection.toLocaleDateString('pt-BR')}
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
