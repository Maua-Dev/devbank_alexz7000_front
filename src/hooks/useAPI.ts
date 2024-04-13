import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL:
        "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws"
});

export default function useAPI<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url)
            .then((response) => {
                // só executa se der sucesso
                setData(response.data);
            })
            .catch((err) => {
                // .catch é um método que só vai ser executado quando der erro
                setError(err);
            })
            .finally(() => {
                // código que executa sempre quando a chamada http terminar, independente se a chamada der sucesso ou erro,mas implicitamente (neste contexto) ele sempre vai dar sucesso
                setIsFetching(false);
            });
    }, []);
    return { data, isFetching, error }; //retornamos dentro de um objeto para retornar mais coisas
}
