import React from 'react'
import Link from 'next/link'
const Navigation = () => {
  return (
    <div>
        <ul className='flex gap-10 justify-end px-10'>
            <li>
                <Link href='/client'>Client</Link>
            </li>
            <li>
                <Link href='/server'>Server</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation