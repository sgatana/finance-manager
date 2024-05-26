import { cn } from '@/lib/utils';

const TooltipCard = ({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className: string;
}) => {
  return (
    <div className='p-2 px-3 space-y-1'>
      <div className='flex items-center justify-between gap-x-4'>
        <div className='flex items-center gap-x-2'>
          <div className={cn('size-1.5 rounded-full', className)} />
          <p className='text-sm text-muted-foreground'>{label}</p>
        </div>
        <p className='text-sm test-right font-medium'>{value}</p>
      </div>
    </div>
  );
};
export default TooltipCard;
