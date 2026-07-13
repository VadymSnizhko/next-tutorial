"use client"

interface ErrorProps {
    error: Error
    reset: () => void
}

const Error = ({error,reset}: ErrorProps) => {
    return (
        <div>
            <h1>Error: {error .message}</h1>
            <button onClick={() => window.location.reload()}>
                Reload
            </button>
        </div>
    )
}

export default Error