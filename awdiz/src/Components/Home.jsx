import { useNavigate } from "react-router-dom"


function Home() {
    const router =useNavigate()
  return (

    <div id="Screen">
      <h1>Home</h1>
      <button onClick={()=>router('/register')}>Register page</button>
        </div>
  )
}

export default Home