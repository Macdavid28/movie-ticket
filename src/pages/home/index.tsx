// import { useQuery } from "@tanstack/react-query";

// const fetchData = async (): Promise<void> => {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/discover/movie?api_key=b50f39bc29a031083b3cf2982311b6af&append_to_response=include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc"
//     );
//     if (!response.ok) throw new Error("Could not fetch movies");
//     const data = await response.json();
//     return data.results;
//   } catch (err) {
//     console.log(err);
//   }
// };
// interface Movie {
//   id: number;
//   name: string;
//   adult: boolean;
//   budget: number;
//   genres: string;
//   popularity: number;
//   overview: string;
//   production: string;
//   releaseDate: number;
//   revenue: string;
//   runtime: string;
//   vote: number;
//   lang: string;
//   posterPath: string;
// }
// export const Home = () => {
//   const {
//     data: movieData,
//     isLoading,
//     isError,
//   } = useQuery<Movie[]>({ queryKey: ["movies"], queryFn: fetchData });
//   {
//     isLoading && <h1 className="text-md">Loading... </h1>;
//   }
//   {
//     isError && <h1 className="text-md"> Error</h1>;
//   }
//   return (
//     <div className="container mx auto-px-4">
//       <div className="grid grid-cols-3 gap-4 my-8">
//         {movieData?.map((movie: any) => (
//           <div
//             className=" border border-blue-400 rounded-md  overflow-hidden flex flex-col justify-between"
//             key={movie.id}
//           >
//             <div className="text-left p-4">
//               <img
//                 src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                 alt=""
//                 className="w-full h-auto"
//               />
//               <div className="p-4 flex flex-col flex-grow">
//                 <h1 className="text-lg font-semibold mb-2">
//                   {movie.original_title}
//                 </h1>
//                 <p className="text-xs py-1 text-gray-400">
//                   Release Date:{movie.release_date}{" "}
//                 </p>
//                 <p className="text-[12px] py-1 flex-grow">{movie.overview}</p>
//               </div>
//               <button className="p-2 bg-blue-400 rounded-md m-4">
//                 Buy Ticket
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

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

  if (isLoading) return <h1 className="text-md">Loading... </h1>;
  if (isError) return <h1 className="text-md"> Error</h1>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {movieData?.map((movie) => (
          <div
            className="shadow-md rounded-md overflow-hidden flex flex-col"
            key={movie.id}
          >
            <div className="block text-left px-1">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="w-full h-auto p-2 "
              />
              <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-lg font-semibold mb-2">
                  {movie.original_title}
                </h1>
                <p className="text-xs py-1 text-gray-400">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-[12px] py-1 flex-grow">{movie.overview}</p>
              </div>
            </div>
            <button className="p-2  bg-gray-400 rounded-md m-4 mt-auto text-white ">
              Buy Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
