// not found pages can also be defined in the folder level
import { notFound } from "next/navigation"

interface param {
    params: { reviewId: string , productId: string}
}

const page = ({ params }: param) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>Reviews About {params.productId} and it's review is {params.reviewId}</h1>
        </div>
    )
}

export default page