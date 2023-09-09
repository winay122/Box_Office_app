
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {

    return (
        <div>
            <img src={image} alt={name} />

            <h1>
                {name} {!!gender && `(${gender})`} 
            </h1>

            <p> {country ? `Comes from ${country}` : 'No record known'} </p>

            {!!birthday && <p>Born {birthday}</p>}

            <p>{deathday ? `Died {deathday} ` : 'Alive'} </p>
            
        </div>
    )
}

export default ActorCard;