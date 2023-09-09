import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getShowById } from "../api/tvmaze";

const Show = () => {
const { showId } = useParams();
const { data: showData, error: showError } = useQuery({
    queryKey:['show', showId],                                       
    queryFn: () => getShowById(showId)
})                                 

if(showError){
    return <div>We have an Error: {showError.message}</div>
}

if(showData){
    return <div>Got Show Data: {showData.name} </div>
}

return <div>Page is loaading...... </div>
}

export default Show;