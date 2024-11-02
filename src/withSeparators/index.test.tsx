import { render } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { withSeparators } from './index'

describe('withSeparators', () => {
  it('renders items with separators in the correct structure', () => {
    const items = [
      <div key={'Item_1'}>Item 1</div>,
      <div key={'Item_2'}>Item 2</div>,
      <div key={'Item_3'}>Item 3</div>,
    ]
    const separator = <hr />
    const separatedItems = withSeparators(items).separatedBy(separator)

    const { container } = render(separatedItems)

    expect(container.innerHTML).toBe('<div>Item 1</div><hr><div>Item 2</div><hr><div>Item 3</div>')
  })

  it('renders items without separators when there is only one item', () => {
    const items = [<div key={'Item_1'}>Item 1</div>]
    const separator = <hr />
    const separatedItems = withSeparators(items).separatedBy(separator)

    const { container } = render(separatedItems)

    expect(container.innerHTML).toBe('<div>Item 1</div>')
  })

  it('renders items without separators when there are no items', () => {
    const items: ReactNode[] = []
    const separator = <hr />
    const separatedItems = withSeparators(items).separatedBy(separator)

    const { container } = render(separatedItems)

    expect(container.innerHTML).toBe('')
  })

  it('renders items without separators when there are no items and no separator', () => {
    const items: ReactNode[] = []
    const separatedItems = withSeparators(items).separatedBy(null)

    const { container } = render(separatedItems)

    expect(container.innerHTML).toBe('')
  })
})
