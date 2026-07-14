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
                    <li key={note.id}>
                        <p className={css.title}><b><Link href={`/notes/${note.id}`}>
                            {note.title}
                        </Link></b></p>
                        
                        <p className={css.textcontent}>{note.content}</p>
                        <strong>{note.category.name}</strong>
                        <p>{note.category.id}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList