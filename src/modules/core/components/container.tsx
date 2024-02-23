import { cn } from "@/modules/core/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div  className={cn("container mx-auto w-full px-5", className)}>
      {children}
    </div>
  );
}