"use client"

import PageContainer from "@/components/PageContainer/PageContainer"

import { formToJSON } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const NoteDetailsClient = () => {

    const router = useRouter()

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const toggleEdit = () => {
        setIsEdit(prevIsEdit => !prevIsEdit)
    }

    const handleBack = () => {
        router.push("/notes/filter/all")
    }

    

    return (
        <div>
            <button onClick={() => handleBack()}>Back</button>
            <button onClick={() => toggleEdit()}>Edit</button>

            {isEdit ? (
                <form>
                    <div>
                        <input placeholder="Title" />
                    </div>
                    <div>
                        <textarea placeholder="Content" />
                    </div>
                </form>
            ) : (
                <PageContainer
                    title="Content"
                    description="Content"
                    category="Category"
                />

            )}
        </div>

    )
}

export default NoteDetailsClient