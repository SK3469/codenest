import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { deleteSnippet } from '@/actions';
import { notFound } from 'next/navigation';
//method 1
const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id
        }
    })
    if (!snippet) notFound();
    const deleteSnippetAction = deleteSnippet.bind(null, id)
    return (
        <div className='max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-10 my-16'>
            <div className='flex justify-between'>
                <Link href={'/'}>
                    <div className='flex bg-black px-1 rounded-lg items-center'>
                        <ArrowLeft className='text-white' />
                        <Button>Back</Button>
                    </div></Link>
                <h1 className='font-bold text-2xl mb-2 text-red-900'>{snippet?.title}</h1>
                <div className='flex items-center gap-4'>
                    <Link href={`/snippet/${snippet?.id}/edit`}><Button>Edit</Button></Link>
                    <form action={deleteSnippetAction}>
                        <Button type='submit' variant={'destructive'}>Delete</Button>
                    </form>
                </div>
            </div>
            <pre>
                <div className='bg-gray-950 text-white p-4 rounded-lg h-60 mt-5 overflow-scroll'>
                    <code className=''>{snippet?.code}</code>
                </div>
            </pre>
        </div>
    )
}

export default SnippetDetailPage

export const generateStaticParams = async () => {
    const snippets = await prisma.snippet.findMany();

    return snippets.map((snippet) => {
        return { id:snippet.id.toString() }
    })
}

/* method 2
type SnippetDetailProps = {
    params: Promise<{
        id: string
    }>
}

const SnippetDetailPage = async ({ params }: SnippetDetailProps) => {
    const id = (await params).id;
    return (
        <div>SnippetDetailPage{id}</div>
    )
} */
/*
    method 3 -TypeScript method
    type SnippetDetailProps = {
        params: Promise<{
            id: string
        }>
    }
    
    const SnippetDetailPage:React.FC<SnippetDetailProps> = async ({ params }) => {
        const id = (await params).id;
        return (
            <div>SnippetDetailPage{id}</div>
        )
    } 
        */