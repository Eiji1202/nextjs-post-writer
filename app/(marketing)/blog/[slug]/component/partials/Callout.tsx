import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Callout(props: Props) {
  const { children } = props;
  return (
    <div className="my-4 md:my-6 flex items-center border rounded-md p-2 md:p-4 bg-muted">
      {children}
    </div>
  );
}
