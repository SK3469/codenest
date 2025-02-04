"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React, { useActionState } from 'react'
import * as actions from "@/actions"

const CreateSnippetPage = () => {
const [formStateData,sunil]= useActionState(actions.createSnippet,{message:""}); 
    return (
        <div  className='max-w-4xl mx-auto rounded-lg shadow-lg p-6 my-12'>
            <form action={sunil} className=' flex flex-col gap-4'> 
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
                    <Label className='text-2xl '>Code</Label>
                    <Textarea
                        name='code'
                        id='code'
                        className='focus-visible:ring-0 h-36'
                    />
                </div>
                {
                    formStateData.message && <div className='bg-red-500 p-1 text-white rounded-md px-5 font-bold shadow-md'>{formStateData.message}</div>
                }
                <div className='text-center mt-10 space-x-2'>
                    <Link href={'/'}><Button variant={'destructive'}>Back</Button></Link>
                    <Button type='submit' className='bg-green-700 w-auto px-5'>Submit</Button>
                </div>
            </form>
        </div>

    )
}

export default CreateSnippetPage