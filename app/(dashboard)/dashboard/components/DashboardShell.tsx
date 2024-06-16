import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function DashboardShell(props: Props) {
  const { children, className } = props;
  return (
    <div
      className={cn("grid items-center gap-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
