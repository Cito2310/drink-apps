import { getEnviroments } from "./getEnviroments";

interface Options {
    method: "GET" | "POST" | "DELETE" | "PUT",
    headers?: { [key: string]: string }
    body?: any
}

export const fetchApi = async ( url: string, options?: Options ) => {
    const { VITE_BASEURL } = getEnviroments();
    const resp = await fetch( (url.includes( VITE_BASEURL ) ? url : VITE_BASEURL + url), options );
    const data = await resp.json();
    
    return { data, status: resp.status };
}