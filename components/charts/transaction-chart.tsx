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
import GradientComponent from './gradient';

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
            <GradientComponent id='income' stopColor='#a78bfa' />
            <GradientComponent id='expenses' stopColor='#f472b6' />
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
