const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  {
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Frank Darabont",
  },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
];

const SurveyForm = ({
  surveyForm,
  errors,
  isSubmitted,
  onChange,
  onSubmit,
  onReset,
}) => {
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-3">
          <h2 className="text-xl font-bold">📋 Summary of survey results</h2>

          <p>
            <strong>Name:</strong> {surveyForm.name}
          </p>
          <p>
            <strong>Email:</strong> {surveyForm.email}
          </p>
          <p>
            <strong>Movie:</strong> {surveyForm.movie}
          </p>

          {surveyForm.comment && (
            <p>
              <strong>Comment:</strong> {surveyForm.comment}
            </p>
          )}

          <button
            onClick={onReset}
            className="mt-4 w-full bg-purple-600 text-white py-2 rounded"
          >
            🔄 Start a new survey
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex justify-center p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="w-full max-w-md bg-white rounded-lg shadow"
      >
        <div className="bg-purple-600 text-white px-4 py-3 rounded-t-lg font-semibold">
          🎬 Movie Survey
        </div>

        <div className="p-4 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              value={surveyForm.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              value={surveyForm.email}
              onChange={(e) => onChange("email", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium mb-2">
              Choose your favorite movie
            </p>
            {movies.map((movie) => (
              <label key={movie.title} className="flex gap-2">
                <input
                  type="radio"
                  checked={surveyForm.movie === movie.title}
                  onChange={() => onChange("movie", movie.title)}
                />
                <span className="text-sm">
                  {movie.title} ({movie.year}) 
                </span>
                <br />
                <span className="text-gray-500 text-xs">
                  Director: {movie.director}
                </span>
              </label>
            ))}
            {errors.movie && (
              <p className="text-red-500 text-sm">{errors.movie}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional comments
            </label>
            <textarea
              value={surveyForm.comment}
              onChange={(e) => onChange("comment", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex justify-between px-4 py-3 border-t">
          <button type="button" onClick={onReset} className="text-sm">
            Reset
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
