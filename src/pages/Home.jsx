import { useState } from "react";
import { searchForShows } from "./../api/tvmaze";

const Home = ()=>{

    const [searchStr, setSearchStr] = useState('');
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    const onSearchInputChange = (event) => {
        
        setSearchStr(event.target.value);
    };

    const onSearch =async (event) => {
        event.preventDefault();

        try{
            setApiDataError(null);
            const result = await searchForShows(searchStr);
            setApiData(result);
        } catch(error){
            setApiDataError(error);
        }
    };

    const renderApiData = () => {
        if(apiDataError){
            return <div>Error occoured: {apiDataError.message}</div>
        }

        if(apiData){
            return (apiData.map((data) => (
                <div key={data.show.id}>{data.show.name}</div>
            )))
        }
        return null;
    };

    return(
        <div>
            <form onSubmit={onSearch}>
                <input type="text" value={searchStr} onChange={onSearchInputChange} />
                <button type="submit">Update</button>
            </form>

            <div>{renderApiData()}</div>
        </div>
    );
}

export default Home;