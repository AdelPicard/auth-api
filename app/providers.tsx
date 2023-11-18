'use client'

import { NextUIProvider } from "@nextui-org/react"

const Providers = ({children}:any) => {
    return ( 
        <NextUIProvider>
            {children}
        </NextUIProvider>
     );
}
 
export default Providers;