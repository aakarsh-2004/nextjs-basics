import Link from "next/link"


const page = () => {
    return (
        <div>
            <h1>Product List</h1>
            <h2>Product 1 <Link href="/products/1">Shop</Link></h2>
            <h2>Product 2 <Link href="/products/2">Shop</Link></h2>
            {/* replace prop means when user goes back he lands onto the main page */}
            <h2>Product 3 <Link href="/products/3" replace>Shop</Link></h2>
            <Link href="/" >Home</Link>
        </div>
    )
}

export default page