import React, { type ReactNode } from 'react';

export const withSeparators = (items: ReactNode[]) => ({
  separatedBy(separator: ReactNode): ReactNode[] {
    return items.map((item, index) => (
      <React.Fragment
        key={`react-list-separator-item-${/* biome-ignore lint/suspicious/noArrayIndexKey: Temporary ignore - needs proper key implementation instead of array index */ index}`}
      >
        {item}
        {index < items.length - 1 && (
          <React.Fragment
            key={`react-list-separator-sep-${/* biome-ignore lint/suspicious/noArrayIndexKey: Temporary ignore - needs proper key implementation instead of array index */ index}`}
          >
            {separator}
          </React.Fragment>
        )}
      </React.Fragment>
    ));
  },
});
