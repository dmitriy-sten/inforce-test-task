import React, { ReactNode } from "react";

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ProductsList = <T,>({ renderItem, items }: Props<T>) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => renderItem(item))}
    </div>
  );
};
