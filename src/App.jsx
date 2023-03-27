import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
   const [modal, setmodal] = useState(true)
   const [cancelTxt, setcancelTxt] = useState("yes-cancel")
   const [content, setcontent] = useState(
      "Are you sure you want to cancel your subscription?",
   )

   const handleYes = () => {
      setcontent("Subscription successfully cancelled!")
      setcancelTxt("cancelled")
      setTimeout(() => {
         setmodal(false)
      }, 2000)
   }
   const handleNo = () => {
      setmodal(false)
   }
   return (
      <div
         className="App"
         style={{
            height: "100vh",
            width: "100%",
            background: "#fff",
         }}
      >
         <div
            style={{
               height: "100vh",
               width: "100%",
               backgroundColor: "rgba(0,0,0,0.1)",
               position: "relative",
               display: modal ? "flex" : "none",
            }}
         >
            <div
               style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  border: "1px solid gray",
                  height: "10rem",
                  width: "20vw",
                  background: "#fff",
                  padding: "20px",
               }}
            >
               <h4>{content}</h4>
               <button onClick={handleYes}>{cancelTxt}</button>
               <button onClick={handleNo}>no</button>
            </div>
         </div>
      </div>
   )
}

export default App
