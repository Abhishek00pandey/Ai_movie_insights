export default function AIInsight({
  summary,
  sentiment,
}: {
  summary: string;
  sentiment: string;
}) {
  if (!summary) return null;

  let color = "bg-gray-500";

  if (sentiment?.toLowerCase().includes("positive")) {
    color = "bg-green-600";
  } else if (sentiment?.toLowerCase().includes("mixed")) {
    color = "bg-yellow-500";
  } else if (sentiment?.toLowerCase().includes("negative")) {
    color = "bg-red-600";
  }

  return (
    <div className="max-w-3xl w-full mt-8 p-6 border rounded-lg bg-blue-50 shadow">
      <h2 className="text-xl font-bold mb-3">AI Audience Insight</h2>

      <p className="text-gray-700 mb-4">{summary}</p>

      <span className={`px-4 py-2 text-white rounded-full text-sm ${color}`}>
        Sentiment: {sentiment}
      </span>
    </div>
  );
}