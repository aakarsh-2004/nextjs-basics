// Dynamic routes
"use client"

interface param {
    params: { productId: string }
}

const page = ( { params }: param ) => {
    
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
        </div>
    )
}

export default page