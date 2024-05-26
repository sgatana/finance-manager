import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cva, VariantProps } from 'class-variance-authority';
import { cn, formatPercentage } from '@/lib/utils';
import { CountUp } from '../countup';

const boxVariant = cva('rounded-md p-1 shrink-0', {
  variants: {
    variant: {
      default: 'bg-indigo-500/20',
      success: 'bg-emerald-500/20',
      danger: 'bg-rose-500/20',
      warning: 'bg-yellow-500/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
const iconVariant = cva('size-6', {
  variants: {
    variant: {
      default: 'fill-indigo-500',
      success: 'fill-emerald-500',
      danger: 'fill-rose-500',
      warning: 'fill-yellow-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BoxVariant = VariantProps<typeof boxVariant>;
type IconVariant = VariantProps<typeof iconVariant>;

interface BalanceCarProps extends BoxVariant, IconVariant {
  title: string;
  dateRange: string;
  description: string;
  balance: number;
  variant?: 'success' | 'default' | 'warning' | 'danger';
  icon: LucideIcon;
  percentageChange: number;
}

const BalanceCard = ({
  title,
  dateRange,
  balance,
  variant,
  icon: Icon,
  percentageChange,
}: BalanceCarProps) => {
  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <div className='space-y-2'>
          <CardTitle className='text-xl line-clamp-1'>{title}</CardTitle>
          <CardDescription className='line-clamp-1'>
            {dateRange}
          </CardDescription>
        </div>
        <div className={cn(boxVariant({ variant }))}>
          <Icon className={cn(' text-transparent', iconVariant({ variant }))} />
        </div>
      </CardHeader>

      <CardContent>
        <h1 className='font-bold text-xl line-clamp-1 break-all'>
          <CountUp
            preserveValue
            start={0}
            end={balance}
            decimals={2}
            decimalPlaces={2}
            prefix='$'
          />
        </h1>
        <p
          className={cn(
            'text-muted-foreground text-sm line-clamp-1',
            percentageChange > 0 && 'text-emerald-500',
            percentageChange < 0 && 'text-rose-500'
          )}
        >
          {formatPercentage(percentageChange, {addPrefix: true})} from last period
        </p>
      </CardContent>
    </Card>
  );
};
export default BalanceCard;
