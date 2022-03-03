import { Head } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import Navigation from '../Components/Navigation'

export default function LandingPageLayout({ title, children }) {

    useEffect(() => {
        console.log('Page Title:: ', title)
    }, [])

    return (
        <>
            <Head>
                <title>{`Food web ${title ? `/ ${title}` : ' / Home'}`}</title>
            </Head>
            <div>
                <Navigation />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
