import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartProps } from '.';
import dayjs from 'dayjs';
import ChartTooltip from './tooltip';

const TransactionsChart = ({ data }: ChartProps) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data!}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <defs>
            <linearGradient id='income' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='2%' stopColor='#a78bfa' stopOpacity={0.8} />
              <stop offset='98%' stopColor='#a78bfa' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='expenses' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='2%' stopColor='#f472b6' stopOpacity={0.8} />
              <stop offset='98%' stopColor='#f472b6' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='date'
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => dayjs(value).format('DD MMM')}
            style={{ fontSize: '10px' }}
          />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip content={<ChartTooltip />} />
          <Area
            type='monotone'
            dataKey='income'
            stackId='income'
            strokeWidth={2}
            stroke='#3d82f6'
            fill='url(#income)'
            className='shadow-sm'
          />
          <Area
            type='monotone'
            dataKey='expenses'
            stackId='expenses'
            strokeWidth={2}
            stroke='#f33f5e'
            fill='url(#expenses)'
            className='shadow-sm'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default TransactionsChart;
