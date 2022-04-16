import { useRouter } from 'next/router'
// [...檔名].js can catch all path as an array
function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  )
}

export default BlogPostsPage
