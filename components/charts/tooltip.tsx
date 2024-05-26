import dayjs from 'dayjs';
import { Separator } from '../ui/separator';
import { formatCurrency } from '@/lib/utils';

const ChartTooltip = ({ active, payload }: any) => {
  if (!active) return null;

  const date = payload[0].payload.date;
  const income = payload[0].value;
  const expenses = payload[1].value;
  return (
    <div className='rounded-sm bg-white shadow-sm overflow-hidden'>
      <div className='px-3 text-sm'>{dayjs(date).format('MMM DD, YYYY')}</div>
      <Separator />
      <div className='p-2 px-3 space-y-1'>
        <div className='flex items-center justify-between gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <div className='size-1.5 bg-indigo-500 rounded-full' />
            <p className='text-sm text-muted-foreground'>Income</p>
          </div>
          <p className='text-sm test-right font-medium'>
            {formatCurrency(income)}
          </p>
        </div>
      </div>
      <div className='p-2 px-3 space-y-1'>
        <div className='flex items-center justify-between gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <div className='size-1.5 bg-rose-500 rounded-full' />
            <p className='text-sm text-muted-foreground'>Expenses</p>
          </div>
          <p className='text-sm test-right font-medium'>
            {formatCurrency(expenses*-1)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChartTooltip;
