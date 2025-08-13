import React, { ReactNode } from "react";

interface Props<T> {
  className?: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ProductsList = <T,>({
  className,
  renderItem,
  items,
}: Props<T>) => {
  return (
    <div className={className}>{items.map((item) => renderItem(item))}</div>
  );
};
