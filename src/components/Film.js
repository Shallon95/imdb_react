const Film = ( {id, name, url}) =>  {

    return (
            <li><a href={url}> {name}</a></li>
    )
}
export default Film