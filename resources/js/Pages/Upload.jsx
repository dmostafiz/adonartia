import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import LandingPageLayout from '../Layouts/LandingPageLayout'
import { Inertia } from '@inertiajs/inertia'

// <{ name: string; avatar: File }>
export default function Upload() {
    const  { data, setData, post, progress } = useForm({
        name: 'Mostafiz',
        avatar: undefined,
    })

    function submit(e) {
        e.preventDefault()
        post('/upload')

    }

    return (

        <LandingPageLayout>

            <form onSubmit={submit}>
                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                <input type="file" onChange={(e) => setData('avatar', e.target.files[0])} />
                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}
                {/* {errors && } */}
                <button className='border-0 px-3 py-2 bg-indigo-700 rounded text-gray-50' type="submit">Submit</button>
            </form>

        </LandingPageLayout>
    )
}
