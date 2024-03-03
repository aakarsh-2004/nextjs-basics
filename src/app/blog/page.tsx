import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    },
}

const page = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default page