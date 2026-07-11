import Link from 'next/link'

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
                        <h3><Link href={`/notes/${note.id}`}>
                            {note.title}
                        </Link></h3>
                        
                        <p>{note.content}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList