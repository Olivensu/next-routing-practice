// app/[productId]/[reviewId]/page.tsx
import { notFound } from 'next/navigation'

export default function ReviewId({ params }: { params: { reviewId: string; productId: string } }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }

  return (
    <>
      <div>ReviewId</div>
      <ul>
        <li>Review {params.reviewId} is details of {params.productId} Product</li>
      </ul>
    </>
  )
}
