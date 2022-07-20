import Article from "./Article"

function ArticleList(props) {
  // console.log(props.posts)
  return (
    <main>
      {props.posts.map((post) => {
          return (
            <Article article={post} key={post.title} />
          )
      })}
    </main>
  )
}


export default ArticleList;