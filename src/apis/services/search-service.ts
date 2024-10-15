import http from "../axios-instance";

export const getSearch = (keyword: string) => {
    return http.get(`/search/users?q=${keyword}`)
}