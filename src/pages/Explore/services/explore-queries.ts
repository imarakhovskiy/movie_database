import { QueryFunctionContext, useQuery } from 'react-query'

import { fetchMoviesByTitle } from './explore-services'

export const useMoviesByTitle = (title?: string) => useQuery(["GET_MOVIES_BY_TITLE", title],
    (context: QueryFunctionContext) => fetchMoviesByTitle(context.queryKey[1] as string), 
    { enabled: !!title })