import { useFetch } from "../../../utils/hooks/useFetch"


export const FetchDos = () => {
    let {data, isLoading, errorMessage} = useFetch("Modal 01", []);
    console.log(data)

    return (
    <div>
      {isLoading ? <h1>Loading</h1> : <h2>Loaded</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  )
};