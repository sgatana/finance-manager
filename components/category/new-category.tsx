import { useNewCategory } from '@/app/hooks/use-new-category';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import CategoryForm, { FormValues } from './category-form';
import { toast } from 'sonner';
import { addCategory } from '@/app/api/categories';

const NewCategory = () => {
  const { isOpen, onClose } = useNewCategory();
  const onSubmit = (values: FormValues) => {
    addCategory(values.name);
    onClose();
    toast.success('Category Created');
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to track your transactions
          </SheetDescription>
        </SheetHeader>
        <CategoryForm
          onSubmit={onSubmit}
          defaultValues={{
            name: '',
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
export default NewCategory;
