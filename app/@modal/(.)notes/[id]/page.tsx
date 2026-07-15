import { getNote } from '@/lib/api'
import Modal from '@/components/Modal/Modal';

import PageContainer from "@/components/PageContainer/PageContainer"


interface NoteProps {
    params: Promise<{ id: string }>
}

/**only ID or Restart Next (delete folder .next)
 * and FUNCTION
*/


async function Notes({ params }: NoteProps) {
    const { id } = await params
    const note = await getNote(id)

    return (
        <Modal>
            <PageContainer
                title={note.title}
                description={note.content}
                category={note.category.name}
            >
            </PageContainer>
        </Modal>
    )
}

export default Notes