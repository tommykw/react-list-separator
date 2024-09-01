import React, { ReactNode } from 'react'

const withSeparators = (items: ReactNode[]) => ({
  separatedBy(separator: ReactNode): ReactNode[] {
    return items.map((item, index) => (
      <React.Fragment key={`react-list-separator-item-${index}`}>
        {item}
        {index < items.length - 1 && (
          <React.Fragment key={`react-list-separator-sep-${index}`}>
            {separator}
          </React.Fragment>
        )}
      </React.Fragment>
    ));
  },
})

export default withSeparators