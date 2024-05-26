'use client';

import { FileSearch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import TransactionsChart from './transaction-chart';
import SpendingChart from './spending-chart';

export type ChartData = {
  date: string;
  income: number;
  expenses: number;
};
export type ChartProps = {
  data?: ChartData[];
};
const Chart = ({ data = [] }: ChartProps) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
      <div className='col-span-1 lg:col-span-3 xl:col-span-4'>
        <Card className='border-none drop-shadow-sm'>
          <CardHeader className='flex space-y-2 lg:space-y-0 lg:flex-row lg:item-center justify-between '>
            <CardTitle className='text-xl line-clamp-1'>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {data.length === 0 ? (
              <div className='flex flex-col gap-y-4 items-center justify-center h-[350px] w-full'>
                <FileSearch className='size-6 text-sm text-muted-foreground' />
                <p className='text-muted-foreground text-sm'>
                  No data for give period
                </p>
              </div>
            ) : (
              <div className='w-full lg:flex gap-2 justify-between'>
                <TransactionsChart data={data} />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className='col-span-1 lg:col-span-3 xl:col-span-2'>
        <Card className='border-none drop-shadow-sm'>
          <CardHeader className='flex space-y-2 lg:space-y-0 lg:flex-row lg:item-center justify-between '>
            <CardTitle className='text-xl line-clamp-1'>Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <SpendingChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Chart;
