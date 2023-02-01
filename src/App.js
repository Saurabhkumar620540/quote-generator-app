// import './App.css'
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'


// export default function App() {
//   const [quote, setQuote] = useState({ content: "", author: "" })
//   const [bgColor, setBgColor] = useState("#ffffff")
//   const [buttonColor, setButtonColor] = useState("#dddddd")

//   const getQuote = () => {
//     fetch("https://api.quotable.io/random")
//       .then((response) => response.json())
//       .then((data) => setQuote(data))
//   }

//   useEffect(() => {
//     getQuote()
//   }, [])

//   const handleClick = () => {
//     getQuote()
//     setBgColor(getRandomColor())
//     setButtonColor(getRandomColor())
//   }

//   const getRandomColor = () => {
//     let letters = '0123456789ABCDEF'
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
//   }

//   return (
//     <div
//       className='App'
//       style={{
//         backgroundColor: bgColor,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       <h1 style={{ textAlign: "center", marginTop: "20px" }}>Saurabh Quote Generator</h1>
//       <div
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: "200px",
//           width: "50%",
//         }}
//       >
//         <div style={{ padding: "20px" }}>
//           <span style={{ color: "rgb(6, 46, 175)" }}>{quote.content}</span> <br />
//           <h4 style={{ color: "rgb(6, 46, 175)" }}>{quote.author}</h4>
//         </div>
//       </div>
//       <button
//         style={{
//           margin: "20px",
//           padding: "10px 20px",
//           backgroundColor: buttonColor,
//           borderRadius: "5px",
//           fontSize: "20px",
//           cursor: "pointer",
//         }}
//         onClick={handleClick}
//       >
//         Get quote
//       </button>
//       <h7 style={{ textAlign: "center", marginTop: "20px" }}>made with 💕 by Saurabh</h7>
//     </div>
//   )
// }

// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// export default function App() {
//   const [quote, setQuote] = useState("")
//   const [bgColor, setBgColor] = useState("rgb(255, 255, 255)")

//   const getQuote = () => {
//     fetch("https://api.quotable.io/random").then((response) => response.json()).then((data) => {
//       setQuote(data)
//       setBgColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
//     })
//   }

//   useEffect(() => getQuote(), [])

//   return (
//     <div className='App' style={{backgroundColor: bgColor}}>
//       <h1 style={{textAlign: "center"}}>Saurabh Quote Generator</h1>
//       <div style={{width: "100%", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
//         <div style={{backgroundColor: "rgb(6, 46, 175)", padding: "1rem", color: "white"}}>
//           <span>{quote.content}</span> <br />
//           <h4>{quote.author}</h4>
//         </div>
//       </div>
//       <div style={{display: "flex", justifyContent: "center", paddingTop: "1rem"}}>
//         <button onClick={getQuote} style={{backgroundColor: "rgb(6, 46, 175)", color: "white", padding: "1rem", borderRadius: "5px", cursor: "pointer", border: "none"}}>Get Quote</button>
//       </div>
//       <div style={{position: "absolute", bottom: "0", width: "100%", textAlign: "center", padding: "1rem"}}>
//         <h7>made with 💕 by Saurabh</h7>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
const [quote, setQuote] = useState({})
const [color, setColor] = useState("rgb(6, 46, 175)")

const getQuote = () => {
fetch("https://api.quotable.io/random")
.then((response) => response.json())
.then((data) => {
setQuote(data)
setColor(getRandomColor())
})
}

useEffect(() => {
getQuote()
}, [])

function getRandomColor() {
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color
}

return (
<div style={{ backgroundColor: color, height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
<div style={{ textAlign: "center", padding: "1em" }}>
<h1>Saurabh Quote Generator</h1>
</div>
<div style={{ width: "50%", margin: "0 auto", backgroundColor: "rgb(6, 46, 175)", color: "white", padding: "2em" }}>
<span style={{ fontSize: "1.2em" }}>{quote.content}</span> <br /><br />
<h4>~ {quote.author}</h4>
</div>
<div style={{ textAlign: "center", padding: "1em" }}>
<button onClick={getQuote} style={{ cursor: "pointer", border: "none", backgroundColor: "rgb(6, 46, 175)", color: "white", padding: "1em 2em", borderRadius: "5px", position: "fixed", bottom: "1em", fontWeight: "bold", fontSize: "1.2em" }}>Get quote</button>
</div>
<div style={{ textAlign: "center", padding: "1em" }}>
<h7>made with 💕 by Saurabh</h7>
</div>
</div>
)
}