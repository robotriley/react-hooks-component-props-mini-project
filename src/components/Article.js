const Article = (props) => {
  console.log(props)
  return (
    <div>
      <article>
        <h3> {props.article.title} </h3>
        <small>{props.article.date} </small>
        <p>{props.article.preview} </p>
      </article>
    </div>
  )
}

export default Article;