import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import LandingPageLayout from '../Layouts/LandingPageLayout'
import { Inertia } from '@inertiajs/inertia'
import { Container } from '@chakra-ui/react'

// <{ name: string; avatar: File }>
export default function Upload() {
    const { data, setData, post, progress, processing } = useForm({
        name: 'Mostafiz',
        avatar: undefined,
    })

    function submit(e) {
        e.preventDefault()
        Inertia.post('/upload', {
            avatar: data.avatar
        }, {
            onSuccess: (data) => {
                console.log('File Uploaded success 2: ', data)
            }
        })
        // const upload = Inertia.post('/upload', {
        //     _method: 'POST',
        //     avatar: data.avatar
        // })


        // console.log('uploaded: ', upload)
    }

    return (

        <LandingPageLayout>
            <Container maxW='container.xl'>
                <form onSubmit={submit} className='flex flex-col gap-3'>
                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                    <input type="file" onChange={(e) => setData('avatar', e.target.files[0])} />
                    {progress && (
                        <progress className='max-w-xl' value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    {/* {errors && } */}
                    <button disabled={processing} className='max-w-xl border-0 px-3 py-2 bg-indigo-700 rounded text-gray-50' type="submit">Submit</button>
                </form>
            </Container>
        </LandingPageLayout>
    )
}
