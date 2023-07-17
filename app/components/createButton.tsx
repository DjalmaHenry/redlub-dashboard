'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@tremor/react';
import { Client } from '../../@types/clients';
import { queryBuilder } from '../../lib/planetscale';

export default function CreateButton({ clients }: {
    clients: Client[]
}) {

    const handleClick = () => {
        // delete id 1
        console.log('deletando');
        queryBuilder
            .deleteFrom('clients')
            .where('id', '=', 2)
            .execute();
        console.log('deletado');
    };

    return (
        <Button className="relative mt-5 max-w-md flex items-center justify-center p-2">
            <PlusIcon className="h-5 w-5"
                onClick={handleClick}
            />
        </Button>

    );
}
