type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function DashboardHeader(props: Props) {
  const { title, description, children } = props;
  return (
    <div className="flex items-center justify-between px-2 md:px-4 pb-4 border-b">
      <div className="grid gap-1">
        <h1 className="font-extrabold text-2xl md:text-3xl">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-xs md:text-sm lg:text-lg leading-normal">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
