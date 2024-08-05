import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b50f39bc29a031083b3cf2982311b6af&append_to_response=include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc"
    );
    if (!response.ok) throw new Error("Could not fetch movies");
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};
interface Movie {
  id: number;
  name: string;
  adult: boolean;
  budget: number;
  genres: string;
  popularity: number;
  overview: string;
  production: string;
  releaseDate: number;
  revenue: string;
  runtime: string;
  vote: number;
  lang: string;
  posterPath: string;
}
export const Home = () => {
  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery<Movie[]>({ queryKey: ["movies"], queryFn: fetchData });
  {
    isLoading && <h1 className="text-md">Loading... </h1>;
  }
  {
    isError && <h1 className="text-md"> Error</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {movieData?.map((movie: any) => (
        <div>
          <div key={movie.id} className="border border-black p-4 text-left">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <h1 className="text-lg "> {movie.original_title}</h1>
            <p className="text-sm text-gray-400">
              Release Date:{movie.release_date}{" "}
            </p>
            <p className="py-2">{movie.overview}</p>
          </div>
          <button className="p-4 bg-blue-400">Buy Ticket</button>
        </div>
      ))}
    </div>
  );
};
