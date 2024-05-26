import { PiggyBank, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import BalanceCard from '../../components/balance';
import Chart from '@/components/charts';
import { getTransactionSummary } from '../api/transactions';

export default function Home() {
  const transactionSummary = getTransactionSummary('desc')
  return (
    <div className='max-w-screen-xl mx-auto w-full pb-10 -mt-24'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8 px-2'>
        <BalanceCard
          title='Remaining'
          description='-10% from last period'
          dateRange='Apr 04 - May 04, 2024'
          balance={1527}
          percentageChange={30}
          icon={PiggyBank}
        />
        <BalanceCard
          title='Income'
          description='-10% from last period'
          dateRange='Apr 04 - May 04, 2024'
          balance={1527}
          variant='success'
          percentageChange={-23.03}
          icon={TrendingUpIcon}
        />
        <BalanceCard
          title='Expenses'
          description='-10% from last period'
          dateRange='Apr 04 - May 04, 2024'
          balance={1527}
          variant='danger'
          percentageChange={9.3}
          icon={TrendingDownIcon}
        />
      </div>
      <div>
        <Chart data={transactionSummary} />
      </div>
    </div>
  );
}
