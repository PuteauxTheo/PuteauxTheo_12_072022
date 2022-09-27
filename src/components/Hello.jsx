function Hello( { name }  )  {
    return (
        <div className="hello-content"> 
            <h3 className="hello">Bonjour <span className="hello name">{name}</span></h3>
            <p className="hello-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Hello