import { useNewTransaction } from '@/app/hooks/use-new-transaction';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import TransactionForm, { FormValues } from './transaction-form';
import { toast } from 'sonner';
import {} from '@/app/api/transactions';
import { getSelectOptions } from '@/lib/utils';
import { getAccounts } from '@/app/api/accounts';
import { getCategories } from '@/app/api/categories';

const NewTransaction = () => {
  const { isOpen, onClose } = useNewTransaction();
  const onSubmit = (values: FormValues) => {
    console.log(values);
    onClose();
    toast.success('Transaction Created');
  };
  const accounts = getAccounts();
  const categories = getCategories();
  const accountOptions = getSelectOptions({
    options: accounts,
    label: 'name',
    value: 'id',
  });
  const categoryOptions = getSelectOptions({
    options: categories,
    label: 'name',
    value: 'id',
  });
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Create a new transaction</SheetDescription>
        </SheetHeader>
        <TransactionForm
          onSubmit={onSubmit}
          defaultValues={{
            payee: '',
            amount: 1,
            notes: '',
            date: null,
            categoryId: '',
            accountId: '',
          }}
          accountOptions={accountOptions}
          categoryOptions={categoryOptions}
        />
      </SheetContent>
    </Sheet>
  );
};
export default NewTransaction;
