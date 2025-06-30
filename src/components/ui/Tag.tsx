import { cn } from '@/utils';
import React from 'react'

type Props = {
  text: string;
  className?: string
}

const Tag = ({ text, className = '' }: Props) => {
  return (
    <div className={cn('font-medium lg:px-6 lg:py-4 px-3 py-2 bg-primary uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap', className)}>{text}</div>
  )
}

export default Tag