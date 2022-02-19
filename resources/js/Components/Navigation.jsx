import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navigation() {
    return (
        <div className='px-2 md:px-0 bg-indigo-500'>
            <div className='max-w-6xl mx-auto flex justify-between items-center py-4 text-gray-50'>
                <div className='brand text-2xl font-bold'>Navigation</div>
                <div className=''>
                    <ul className='flex items-center gap-4'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/upload'>Upload file</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
