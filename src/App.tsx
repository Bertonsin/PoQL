import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react/hooks";

interface pokemon {
  id: string;
  name: string;
}

const GET_POKE_QUERY = gql`
  query pokemon_v2_pokemon($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ pokemon_v2_pokemon: pokemon[] }>(
    GET_POKE_QUERY,
    {
      variables: {
        limit: 10,
      },
    }
  );

  if (loading) {
    <div>
      <h1>Carregando...</h1>
    </div>;
  }

  return (
    <ul>
      {data?.pokemon_v2_pokemon?.map((pokemonAbility) => {
        return <li key={pokemonAbility.id}>{pokemonAbility.name}</li>;
      })}
    </ul>
  );
}

export default App;
