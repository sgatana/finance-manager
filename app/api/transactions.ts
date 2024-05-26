import { ChartData } from '@/components/charts';
import dayjs from 'dayjs';
import orderBy from 'lodash/orderBy';
import { getAccounts } from './accounts';
import { getCategories } from './categories';

export type Transaction = {
  id: string;
  amount: number;
  userId?: string;
  payee: string;
  notes: string;
  date: string;
  categoryId: string;
  accountId: string;
  category?: string;
  account?: string;
};

const transactions: Transaction[] = [
  {
    id: '1',
    payee: 'Test Payee 1',
    amount: 302,
    notes: 'Hello',
    date: dayjs().subtract(2, 'd').toISOString(),
    categoryId: '2',
    accountId: '1',
  },
  {
    id: '1',
    payee: 'Test Payee 2',
    amount: 302,
    notes: 'Hello',
    date: dayjs().toISOString(),
    categoryId: '1',
    accountId: '2',
  },
];

export const transactionSummary: ChartData[] = [
  {
    date: dayjs().toString(),
    expenses: 4000,
    income: 2400,
  },
  {
    date: dayjs().subtract(1, 'd').toString(),
    expenses: 3000,
    income: 1398,
  },
  {
    date: dayjs().subtract(2, 'd').toString(),
    expenses: 2000,
    income: 9800,
  },
  {
    date: dayjs().subtract(3, 'd').toString(),
    expenses: 2780,
    income: 3908,
  },
  {
    date: dayjs().subtract(4, 'd').toString(),
    expenses: 1890,
    income: 4800,
  },
  {
    date: dayjs().subtract(5, 'd').toString(),
    expenses: 2390,
    income: 3800,
  },
  {
    date: dayjs().subtract(6, 'd').toString(),
    expenses: 3490,
    income: 4300,
  },
];
export const getTransactionSummary = (
  sortCriteria: 'asc' | 'desc' = 'asc',
  sortField = 'date'
) => orderBy(transactionSummary, sortField, sortCriteria);


export const deleteTransaction = (transactionIds: string[]) => {
  transactionIds.forEach((id) => {
    const transactionIndex = transactions.findIndex(
      (transaction) => transaction.id === id
    );
    transactions.splice(transactionIndex, 1);
  });
};

export const getTransactions = () => transactions?.map(transaction => {
  return {
    ...transaction,
    date: dayjs(transaction.date).format('MMM DD, YYYY'),
    account: getAccounts().find(account => account.id === transaction.accountId)?.name,
    category: getCategories().find(category => category.id === transaction.categoryId)?.name,
  }
});
