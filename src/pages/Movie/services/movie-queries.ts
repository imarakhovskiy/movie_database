import { QueryFunctionContext, useQuery } from 'react-query'

import { fetchDetailedMovieInfoByImdbId } from './movie-services'

export const useDetailedMovie = (imdbID?: string) => useQuery(["GET_DETAILED_MOVIE", imdbID],
    (context: QueryFunctionContext) => fetchDetailedMovieInfoByImdbId(context.queryKey[1] as string), 
    { enabled: !!imdbID })