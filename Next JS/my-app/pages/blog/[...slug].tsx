import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const AllRoutes = () => {
    const router = useRouter();
    console.log(router.query)
    return (
        <div>
            <Link href="clients/1"></Link>
            Get all routes as array
        </div>
    )
}

export default AllRoutes
