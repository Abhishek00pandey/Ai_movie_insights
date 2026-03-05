"use client";
import MovieCard from "./components/MovieCard";
import Reviews from "./components/Reviews";
import AIInsight from "./components/AIInsight";

import { useState } from "react";

export default function Home() {
  const [imdbId, setImdbId] = useState("");
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async () => {
    if (!imdbId) {
      alert("Please enter IMDb ID");
      return;
    }

    const res = await fetch(`/api/film?imdbId=${imdbId}`);
    const data = await res.json();
    setResponse(data);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">IDtoFilm</h1>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter IMDb ID (e.g. tt0133093)"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Fetch
        </button>
      </div>

      {response && !response.error && (
  <MovieCard movie={response.movie} />
)}
{response && response.reviews && (
  <Reviews reviews={response.reviews} />
)}
{response && (
  <AIInsight
    summary={response.aiSummary}
    sentiment={response.sentiment}
  />
)}

{response && response.error && (
  <p className="text-red-500">{response.error}</p>
)}
    </main>
  );
}