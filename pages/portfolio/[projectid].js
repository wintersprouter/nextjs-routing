import { useRouter } from 'next/router'
function PortfolioProjectPage() {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)
  //像後端伺服器發送請求
  //根據 router.query.projectid 以取得特定 id 的資料
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage
