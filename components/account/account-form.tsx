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

export const formSchema = z.object({
  name: z.string(),
});

export type FormValues = z.input<typeof formSchema>;

type AccountFormProps = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};
const AccountForm = ({
  defaultValues,
  id,
  disabled,
  onSubmit,
  onDelete,
}: AccountFormProps) => {
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
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <FormControl>
                  <Input
                    disabled={disabled}
                    placeholder='e.g Cash, Bank, Credit Card'
                    {...field}
                    className=' focus-visible:ring-offset-0 focus-visible:ring-transparent'
                  />
                </FormControl>
              </FormLabel>
            </FormItem>
          )}
        />
        <Button className='w-full' disabled={disabled}>
          {id ? 'Save Changes' : 'Create Account'}
        </Button>
        {!!id && (
          <Button
            type='button'
            variant='outline'
            onClick={handleDelete}
            disabled={disabled}
            className='w-full text-red-400'
          >
            <span className='mr-2'> Delete Account</span>
            <Trash className='size-4' />
          </Button>
        )}
      </form>
    </Form>
  );
};
export default AccountForm;
