'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@tremor/react';
import { Client } from '../../@types/clients';

export default function CreateButton({ clients }: { clients: Client[] }) {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/client/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId: 1 })
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button className="relative mt-5 max-w-md flex items-center justify-center p-2">
      <PlusIcon className="h-5 w-5" onClick={handleClick} />
    </Button>
  );
}
