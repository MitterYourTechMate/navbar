import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState({submenu:"", open:false})
  const submenu = {
    news:[
      {
        label:"New Zealand",
        image:"https://cdn.midjourney.com/02055807-a530-4b7d-95b0-2bbd729359b7/0_0.png"
      },
      {
        label:"India",
        image:"https://cdn.midjourney.com/c561c7c6-cd8f-484b-82f2-df2fed2e02de/0_2.jpeg"
      },
      {
        label:"Australia",
        image:"https://cdn.midjourney.com/b016ea4b-0aa1-4dc3-87f3-4986b3ba3c7d/0_2.png"
      },
      {
        label:"Australia",
        image:"https://cdn.midjourney.com/b016ea4b-0aa1-4dc3-87f3-4986b3ba3c7d/0_2.png"
      },
    ],
    blogs:[
      {
        label:"New Zealand",
        image:"https://cdn.midjourney.com/a74284cc-d761-47a5-8038-3275da7bef60/0_1.png"
      },
      {
        label:"India",
        image:"https://cdn.midjourney.com/db66e369-7ccd-421a-abff-a4f572c08e0f/0_3.png"
      }
    ]
  }
  return (
    <div className="App" onMouseLeave={() => setOpen({submenu:"", open:false})}>
      <div style={{display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        gap:"5%",
        backgroundColor:"black",
        color:"white",
        height:"50px",

        }}>
        <div style={{cursor:"pointer", fontSize:(open.submenu === "home"?"30px":"15px")}} onMouseOver={() => setOpen({submenu:"home", open:false})}>HOME</div>
        <div style={{cursor:"pointer", fontSize:(open.submenu === "news"?"30px":"15px")}} onMouseOver={() => setOpen({submenu:"news", open:true})}>NEWS</div>
        <div style={{cursor:"pointer", fontSize:(open.submenu === "blogs"?"30px":"15px")}} onMouseOver={() => setOpen({submenu:"blogs", open:true})}>BLOGS</div>
        <div style={{cursor:"pointer", fontSize:(open.submenu === "about"?"30px":"15px")}} onMouseOver={() => setOpen({submenu:"about", open:false})}>ABOUT</div>
      </div>
      {open.open &&
           <div
           style={{
             position:"absolute",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             textAlign:"center",
             backgroundColor:"rgba(0,0,0)",
             color:"white",
             width:"100%",
            //  height:"200px",
             gap:"1%",
             flexWrap:"wrap"
           }}
           >
            {open.submenu === "news" &&
              submenu.news.map(item => {
                return (
                  <div>
                    <img src={item.image} style={{height:"110px", width:"110px"}}></img>
                    <div>{item.label}</div>
                  </div>
                )
              })
            }
             {open.submenu === "blogs" &&
              submenu.blogs.map(item => {
                return (
                  <div>
                    <img src={item.image} style={{height:"110px", width:"110px"}}></img>
                    <div>{item.label}</div>
                  </div>
                )
              })
            }
           </div>
      
      }
   
      {/* <div>LANDING PAGE HERO SECTION</div> */}
    </div>
  );
}

export default App;
