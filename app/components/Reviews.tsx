type Review = {
  author: string;
  content: string;
};

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-8 max-w-3xl w-full space-y-4">
      <h2 className="text-xl font-bold">Audience Reviews</h2>

      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-50 shadow-sm"
          >
            <p className="font-semibold">{review.author}</p>
            <p className="text-gray-700 text-sm mt-2">
              {review.content.slice(0, 300)}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews available.</p>
      )}
    </div>
  );
}