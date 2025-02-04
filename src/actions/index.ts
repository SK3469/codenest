"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    })
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        }
    })
    revalidatePath(`/`)
    redirect('/')
}
export async function createSnippet(prevState: { message: string }, formData: FormData) {
    try {
        const title = formData.get('title') //as string // data will definetly came thats why use string
        const code = formData.get('code') //as string // data will definetly came

        if (typeof title !== "string" || title.length < 4) {
            return { message: "Title is required and must be longer." }
        }
        if (typeof code !== "string" || code.length < 8) {
            return { message: "Code is required and must be longer." }
        }
        await prisma.snippet.create({
            data: {
                title,
                code
            }
        })
        // throw new Error("Ops somthing went wrong")
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message }
        } else{
            return {message: "some internal server error"}
        }

    }
revalidatePath("/")
    redirect("/")  // NEXT js freature to navigate page like react navigation feature
}