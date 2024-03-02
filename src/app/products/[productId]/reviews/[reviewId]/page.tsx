
interface param {
    params: { reviewId: string , productId: string}
}

const page = ({ params }: param) => {
    return (
        <div>
            <h1>Reviews About {params.productId} and it's review is {params.reviewId}</h1>
        </div>
    )
}

export default page