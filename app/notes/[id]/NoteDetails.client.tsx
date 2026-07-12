"use client"

import { formToJSON } from "axios"
import { useState } from "react"

const NoteDetailsClient = () => {

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const toggleEdit = () => {
        setIsEdit(prevIsEdit => !prevIsEdit)
    }

    return (
        <div>
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