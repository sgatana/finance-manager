import dayjs from 'dayjs';
import { Separator } from '../ui/separator';
import { formatCurrency } from '@/lib/utils';
import TooltipCard from './tooltip-card';

const ChartTooltip = ({ active, payload }: any) => {
  if (!active) return null;

  const date = payload[0].payload.date;
  const income = payload[0].value;
  const expenses = payload[1].value;
  return (
    <div className='rounded-sm bg-white shadow-sm overflow-hidden'>
      <div className='px-3 py-1 text-sm'>
        {dayjs(date).format('MMM DD, YYYY')}
      </div>
      <Separator />
      <TooltipCard
        label='Income'
        value={formatCurrency(income)}
        className='bg-indigo-500'
      />
      <TooltipCard
        label='Expenses'
        value={formatCurrency(expenses * -1)}
        className='bg-rose-500'
      />
    </div>
  );
};
export default ChartTooltip;
