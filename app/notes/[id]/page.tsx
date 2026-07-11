interface NoteProps {
    params: Promise<{id: string}>
}

/**only ID or Restart Next (delete folder .next)
 * and FUNCTION
*/


async function Notes ({params}: NoteProps) {
    const {id} = await params
    

    return (
        <div>
            <h1>This Notes dinamic: {id}</h1>
        </div>
    )
}

export default Notes