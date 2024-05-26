'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { getTransactions } from '@/app/api/transactions';
import { useNewTransaction } from '@/app/hooks/use-new-transaction';

const TransactionsPage = () => {
  const { onOpen } = useNewTransaction();
  const data = getTransactions();
  return (
    <div className='max-w-screen-xl mx-auto w-full pb-10 -mt-24'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className=' line-clamp-1 text-xl'>
            Transactions History
          </CardTitle>
          <Button onClick={onOpen} size='sm'>
            <Plus className='size-4 mr-2' />
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} filterKey='category' />
        </CardContent>
      </Card>
    </div>
  );
};
export default TransactionsPage;
