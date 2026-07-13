"use client"

import { formToJSON } from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

const NoteDetailsClient = () => {

    const router = useRouter()

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const toggleEdit = () => {
        setIsEdit(prevIsEdit => !prevIsEdit)
    }

    const handleBack = () => {
        router.push("/notes")
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
                <div>
                    <h1>Title</h1>
                    <p>Content</p>
                    <strong>Category</strong>
                </div>

            )}
        </div>

    )
}

export default NoteDetailsClient