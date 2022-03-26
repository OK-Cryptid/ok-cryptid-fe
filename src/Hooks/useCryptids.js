import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export const useFilms = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY)

  return (
    error, 
    data,
    loading
  )
}