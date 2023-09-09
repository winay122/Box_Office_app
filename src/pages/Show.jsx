import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getShowById } from "../api/tvmaze";

const Show = () => {
const { showId } = useParams();
const { data: showData, error: showError } = useQuery(
    ['show', showId],                                         //query key also written as (queryKey: ['show',showId])
    () => getShowById(showId))                                //query function also written as (queryFn: getshowById(showId))

if(showError){
    return <div>We have an Error: {showError.message}</div>
}

if(showData){
    return <div>Got Show Data: {showData.name} </div>
}

return <div>Page is loaading...... </div>
}

export default Show;