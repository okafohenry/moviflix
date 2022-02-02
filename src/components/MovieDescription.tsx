export const MovieDescription = (props: {description?: string}) => {
    return(
        <article>
            <p>{props.description}</p>
        </article>
    )
}