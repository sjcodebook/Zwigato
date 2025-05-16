'use client'

import { cn } from '@/lib/utils'

const activeBgColor = '#F3F4FF'
const activeBorderColor = '#4E60FF'
const activeTextColor = '#4E60FF'

const inactiveBgColor = '#FFFFFF'
const inactiveBorderColor = '#EDEEF2'
const inactiveTextColor = '#545563'

interface CategoryBtnProps {
  icon: React.ReactNode
  catId: string
  label: string
  active?: boolean
  onClick?: (catId: string) => void
}

export default function CategoryBtn({
  icon,
  catId,
  label,
  active = false,
  onClick = () => {},
}: CategoryBtnProps) {
  return (
    <button
      onClick={() => onClick(catId)}
      className={cn(
        'flex flex-col items-center justify-center w-full py-3 px-2 border rounded-lg transition-colors cursor-pointer',
        !active && 'hover:bg-gray-50'
      )}
      style={{
        backgroundColor: active ? activeBgColor : inactiveBgColor,
        borderColor: active ? activeBorderColor : inactiveBorderColor,
      }}>
      <span className='text-xl mb-1 md:text-2xl'>{icon}</span>
      <span
        className={'text-xs md:text-sm font-bold'}
        style={{
          color: active ? activeTextColor : inactiveTextColor,
        }}>
        {label}
      </span>
    </button>
  )
}
