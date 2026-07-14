import {getNote} from '@/lib/api'

import PageContainer from "@/components/PageContainer/PageContainer"

import NoteDetailsClient from './NoteDetails.client'

interface NoteProps {
    params: Promise<{id: string}>
}

/**only ID or Restart Next (delete folder .next)
 * and FUNCTION
*/


async function Notes ({params}: NoteProps) {
    const {id} = await params
    const note = await getNote(id)
    
    //
    /**
     *         <PageContainer
            title = {note.title}
            description={note.content}
            category={note.category.name}
        />
     */
    return (
        <NoteDetailsClient/>
    )
}

export default Notes