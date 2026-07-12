import {getNote} from '@/lib/api'

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
    

    return (
        <div>
            <NoteDetailsClient/>

        </div>
    )
}

export default Notes