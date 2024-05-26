import { z } from 'zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from '@/components/ui/form';
import DatePicker from '@/components/date-picker';
import OptionSelector from '../option-selector';
import { Textarea } from '../ui/textarea';

export const formSchema = z.object({
  date: z.coerce.date().nullable(),
  accountId: z.string(),
  categoryId: z.string(),
  payee: z.string(),
  amount: z.number(),
  notes: z.string().optional(),
});

export type FormValues = z.input<typeof formSchema>;

export type SelectOption = {
  label: string;
  value: string;
};

type TransactionFormProps = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
  accountOptions: SelectOption[];
  categoryOptions: SelectOption[];
};
const TransactionForm = ({
  defaultValues,
  id,
  disabled,
  onSubmit,
  onDelete,
  categoryOptions,
  accountOptions,
}: TransactionFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };
  const handleDelete = () => {
    onDelete?.();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-4 pt-4'
      >
        <FormField
          name='date'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Date
                <FormControl>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    disabled={disabled}
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          name='amount'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Amount
                <FormControl>
                  <Input
                    type='number'
                    min={1}
                    disabled={disabled}
                    placeholder='e.g 5000 '
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                    className=' focus-visible:ring-offset-0 focus-visible:ring-transparent'
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          name='categoryId'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Category
                <FormControl>
                  <OptionSelector
                    options={categoryOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          name='accountId'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Account
                <FormControl>
                  <OptionSelector
                    options={accountOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          name='payee'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Payee
                <FormControl>
                  <Input
                    disabled={disabled}
                    placeholder='add a payee '
                    {...field}
                    className=' focus-visible:ring-offset-0 focus-visible:ring-transparent'
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          name='notes'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Notes
                <FormControl>
                  <Textarea
                    disabled={disabled}
                    placeholder='option notes about the transactions ... '
                    {...field}
                    className=' focus-visible:ring-offset-0 focus-visible:ring-transparent'
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />
        <Button className='w-full' disabled={disabled}>
          {id ? 'Save Changes' : 'Create Transaction'}
        </Button>
        {!!id && (
          <Button
            type='button'
            variant='outline'
            onClick={handleDelete}
            disabled={disabled}
            className='w-full text-red-400'
          >
            <span className='mr-2'> Delete Transaction</span>
            <Trash className='size-4' />
          </Button>
        )}
      </form>
    </Form>
  );
};
export default TransactionForm;
