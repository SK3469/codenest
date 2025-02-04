"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from "@/actions"

const initialState = {
    message: ""
}

const CreateSnippetPage = () => {
    const [state, formAction] = useFormState(actions.createSnippet, initialState);

    return (
        <div className='max-w-4xl mx-auto rounded-lg shadow-lg p-6 my-12'>
            <form action={formAction} className='flex flex-col gap-4'> 
                <h1 className='text-blue-800 text-4xl font-bold mb-10'>Create Snippet</h1>
                <div>
                    <Label className='text-2xl'>Title</Label>
                    <Input
                        type='text'
                        name='title'
                        id='title'
                        className='focus-visible:ring-0'
                    />
                </div>
                <div>
                    <Label className='text-2xl'>Code</Label>
                    <Textarea
                        name='code'
                        id='code'
                        className='focus-visible:ring-0 h-36'
                    />
                </div>
                {state?.message && (
                    <div className="mt-2 text-red-500">{state.message}</div>
                )}
                <div className='flex gap-2'>
                    <Button type='submit'>Create</Button>
                    <Button asChild variant='outline'>
                        <Link href='/'>Cancel</Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateSnippetPage