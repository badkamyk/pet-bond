import {useEffect} from "react";

export default function useInvalidateQuery({queryClient, queryKey} : {queryClient: any, queryKey: string}) {
    useEffect(() => {
        window.addEventListener("storage", () => {
            queryClient.invalidateQueries(queryKey);
        })

        return () => {
            window.removeEventListener("storage", () => {
                queryClient.invalidateQueries(queryKey);
            })
        }
    }
    , [])
}
