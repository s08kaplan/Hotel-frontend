import { useEffect } from "react"
import "./NotFound.css"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
const navigate = useNavigate()
    useEffect(() => {
      
  const timer =  setTimeout(() =>{
    navigate("/")
  },3000)
      return () => {
        
      }
    }, [])
    
  return (
    <section className="not-found-main">
        <div className="container">
            <div className="sub-container">
                <h1>The page you are looking for not exist or removed</h1>
                <h3>You will be redirected to the home page in 3 seconds</h3>
                 {/* <img src="https://www.shutterstock.com/image-vector/404-error-page-explorer-man-260nw-2161180329.jpg" alt="not-found" /> */}
                 {/* <img src="https://img.lovepik.com/free-png/20220126/lovepik-404-page-error-png-image_401803270_wh1200.png" alt="not-found" /> */}
            </div>
        </div>
    </section>
  )
}

export default NotFound