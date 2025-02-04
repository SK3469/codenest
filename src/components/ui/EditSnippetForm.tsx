"use client"
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client' // importing type..
import React, { useState } from 'react'
import { Button } from './button'
import Link from 'next/link'
import { saveSnippet } from '@/actions'
import { ArrowLeft } from 'lucide-react'


const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
    const [code, setCode] = useState(snippet.code)
    const changeEventHandler = (value: string = "") => {
        setCode(value)
    }

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)
  
    return (
        <div className='max-w-4xl mx-auto mt-16 bg-gray-100 p-5 rounded-lg shadow-md'>
            <form action={saveSnippetAction}>
                <h1 className='text-3xl font-bold mb-3 truncate'>Code-Editor:
                    <span className='text-red-600 text-2xl mx-1'>{snippet.title}</span></h1>
                <div className='flex justify-between mb-5 '>
                    <Link href={`/snippet/${snippet.id}`}><ArrowLeft/></Link>
                    <Button type='submit' className='bg-green-600 font-bold'>Save</Button>
                </div>
            </form>
            <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue={code}
                theme='vs-dark'
                onChange={changeEventHandler}

            />
        </div>
    )
}

export default EditSnippetForm