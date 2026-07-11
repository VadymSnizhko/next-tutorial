import PageContainer from "@/components/PageContainer/PageContainer"

import NoteList from "@/components/NoteList/NoteList"

import { getNotes } from "@/lib/api"

const Notes = async () => {
    const respons = await getNotes()

    return (
        <PageContainer
            title="Page Notes"
            description="Brows notes, this page can show dinamic notes ..."
        >
            <NoteList notes={respons.notes}/>
        </PageContainer>

    )
}

export default Notes