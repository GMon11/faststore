import type { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'

import Button from '../../../atoms/Button'
import Input from '../../../atoms/Input'
import type { OutOfStockProps } from '../OutOfStock'
import Component from '../OutOfStock'
import mdx from './OutOfStock.mdx'

const OutOfStockTemplate: Story<OutOfStockProps> = ({ ...props }) => {
  const [value, setValue] = useState('')

  const handlerSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // eslint-disable-next-line no-alert
    alert(value)
  }

  return (
    <Component onSubmit={handlerSubmitForm} {...props}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button>Notify me</Button>
    </Component>
  )
}

export const OutOfStock = OutOfStockTemplate.bind({})
OutOfStock.storyName = 'OutOfStock'

export default {
  title: 'Organisms/OutOfStock',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    title: 'Notify me',
    message: 'Notify me when available',
  },
} as Meta
