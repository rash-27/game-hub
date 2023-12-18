import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";



export interface Games {
    id : number;
    name : string;
    background_image : string
    parent_platforms : { platform : Platform }[],
    metacritic : number;
}




const useGames = (
    gameQuery : GameQuery
 )=>useData<Games>('/games',{
    params:{
        genres : gameQuery.genre?.id,
        platforms  : gameQuery.platform?.id
    }} ,
    [gameQuery]);

export default useGames;