export default function ProductDetails({params}: {
    params:{productId: string};
}){
    return <>
        <div>ProductDetails</div>
        <ul>
            <li>Product is details {params.productId}</li>
        </ul>
    </>
}