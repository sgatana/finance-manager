import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Option = {
  label: string;
  value: string;
};

type SelectOptionProps = {
  value?: any;
  onChange: any;
  options?: Option[];
  disabled?: boolean;
};

const OptionSelector = ({
  value,
  onChange,
  disabled,
  options = [],
}: SelectOptionProps) => {
  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger
        className={cn(
          'font-normal  focus:ring-offset-0 active:ring-0 focus:ring-0',
          !value && 'text-muted-foreground'
        )}
      >
        <SelectValue className='w-full' placeholder='Category' />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ label, value }: Option) => (
          <SelectItem value={value} key={label}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default OptionSelector;
