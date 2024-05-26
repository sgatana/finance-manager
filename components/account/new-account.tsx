import { useNewAccount } from '@/app/hooks/use-new-account';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import AccountForm, { FormValues } from './account-form';
import { toast } from 'sonner';
import { addAccount } from '@/app/api/accounts';

const NewAccount = () => {
  const { isOpen, onClose } = useNewAccount();
  const onSubmit = (values: FormValues) => {
    addAccount(values.name);
    onClose();
    toast.success('Account Created');
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          defaultValues={{
            name: '',
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
export default NewAccount;
