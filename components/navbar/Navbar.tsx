import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { path:'/about', text:'About' },
  { path:'/price', text:'Price' },
  { path:'/contact', text:'Contact' },
]

export const Navbar = () => {
  return (
    <nav className='flex flex-row justify-stretch gap-5 bg-blue-800 bg-opacity-200 p-2'>

      <Link href={'/'} className='flex items-center gap-2'>
        <HomeIcon size={16} />
        Home
      </Link>
      <div className='flex flex-1 justify-end'>
        {
          navItems.map( navItem => (
            <ActiveLink key={navItem.path} {...navItem}/>
          ))
        }
      </div>
    </nav>
  )
}
