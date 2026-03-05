type MovieProps = {
  movie: any;
};

export default function MovieCard({ movie }: MovieProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-3xl w-full">
      <div className="flex flex-col md:flex-row">
        
        {/* Poster */}
        <div className="md:w-1/3">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 md:w-2/3 space-y-3">
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-gray-600">
            {movie.Year} • ⭐ {movie.imdbRating}
          </p>

          <p className="text-sm text-gray-500">
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p className="text-gray-700">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}