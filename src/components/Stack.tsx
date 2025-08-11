import React from 'react'

type Size = 'sm' | 'base' | 'md' | 'lg' | 'xl'

interface Props {
  size?: Size
  horizontal?: boolean
  children: React.ReactNode
}

const sizeMap: Record<Size, string> = {
  sm: 'gap-2',
  base: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

export const Stack = ({
  size = 'base',
  horizontal = false,
  children,
}: Props) => (
  <div
    className={`flex ${horizontal ? 'flex-row' : 'flex-col'} ${sizeMap[size]}`}
  >
    {children}
  </div>
)
