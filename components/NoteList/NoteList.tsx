import Link from 'next/link'

import css from './NoteList.module.css'

import type { Note } from '@/types/note'

interface NoteListProps {
    notes: Note[]
}

const NoteList = ({ notes }: NoteListProps) => {
    return (
        <div>
            <ul>
                {notes.map(note => (
                    <li key={note.id} className={css.field}>
                        <strong className={css.title}>
                            <Link href={`/notes/${note.id}`}>
                            {note.title}
                            </Link>
                        </strong>

                        <p className={css.textcontent}>{note.content}</p>
                        <strong>Category: {note.category.name}</strong>
                        <br/>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList