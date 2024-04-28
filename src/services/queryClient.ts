import { QueryClient } from "react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export async function api(api: string) {
    const urlValida = verificarURLValida(api).then();
    if (urlValida != null) {
        localStorage.setItem("apiResult", api);
        return api;
    } else {
        alert("URL inválida");
        return null;
    }
}

export function useApiResult() {
    return localStorage.getItem("apiResult");
}

async function verificarURLValida(url: string) {
    try {
        await axios.get(url);
        return url;
    } catch (error) {
        alert(error);
        return null;
    }
}
