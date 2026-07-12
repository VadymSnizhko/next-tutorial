"use client"

import React, { useState } from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

interface TanstacProvideProps {
    children: React.ReactNode
}

const TanstacProvide = ({children}: TanstacProvideProps) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
                </QueryClientProvider>
        </div>
    )
}

export default TanstacProvide
