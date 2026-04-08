import { cn } from "@/lib/utils";

export const GridBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-transparent",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-70 [mask-image:radial-gradient(ellipse_85%_70%_at_50%_0%,#000_65%,transparent_115%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] dark:opacity-40" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
