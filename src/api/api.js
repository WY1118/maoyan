import http from "@/utils/http.js";
export const getNowMovie = (id) => http("get", "/api/ajax/movieOnInfoList?token=&cityId="+id)
export const getCityList = () => http("get", "/api/dianying/cities.json")
export const getMoreMovie = (id) => http("get","/api/ajax/moreComingList?token=&movieIds="+id)