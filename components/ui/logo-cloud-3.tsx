import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

type LogoCloudProps = React.ComponentProps<'div'> & {
  items: string[];
};

export function LogoCloud({ className, items, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
        className
      )}
    >
      <InfiniteSlider gap={0} reverse duration={40} durationOnHover={80}>
        {items.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center px-6 h-[40px] border-r border-white/10"
          >
            <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-widest uppercase text-white/40 whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
