// Dynamic routes
import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100);
    })
    return {
        title: `Product ${title}`
    }
}

const page = ( { params }: Props ) => {
    
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
        </div>
    )
};

export default page;