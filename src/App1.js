import {Fragment,useState,useEffect} from "react";
import axios from "axios";
/*
      function App1(a){
         return (
           => JSX => HTML (XML)
         )
      }
      App1(A())  => map(function(){}) => map(()=>{})
      .click(function(){})
      function A()
      {
      }
      export default App1
      == 함수 (변수형)
      == 장점 => 매개변수로 전송 , 속성으로 전송
      export const App1=()=>{
         return (
         )
      }
      const App1=function(){
         return (
         )
      }
 */
function App1(){
    // 변수 설정 => 멤버변수 => useState
    const [musicList,setMusicList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost/music/list')
            .then(response=>{
                setMusicList(response.data)
            })
    },[]) // mounted()
    // [{},{}....] => for(Music music:list)
    /*
          musicList.forEach((music)=>{
             return (
                => HTML
             )
          })
     */

    let html=musicList.map((music)=>
        <tr>
            <td className={"text-center"}>{music.mno}</td>
            <td className={"text-center"}>
                {
                    music.state==="상승" &&
                     <span style={{"color":"red"}}>▲{music.idcrement}</span>
                }
                {
                    music.state==="하강" &&
                    <span style={{"color":"blue"}}>▼{music.idcrement}</span>
                }
                {
                    music.state==="유지" &&
                    <span style={{"color":"gray"}}>-</span>
                }
            </td>
            <td className={"text-center"}>
                <img src={"http:"+music.poster} style={{"width":"35px","height":"35px"}}/>
            </td>
            <td>{music.title}</td>
            <td>{music.singer}</td>
            <td>{music.album}</td>
        </tr>
    )
    return (
        <div className={"container"}>
           <Header/>
           <div className={"row"}>
               <table className={"table"}>
                   <tr>
                       <td>
                           <input type={"text"} size={"30"} className={"input-sm"}
                                  placeholder={"검색어 입력"}/>
                       </td>
                   </tr>
               </table>
           </div>
           <div className={"row"}>
               <table className={"table"}>
                   <thead>
                   <tr>
                       <th className={"text-center"}>순위</th>
                       <th className={"text-center"}></th>
                       <th className={"text-center"}></th>
                       <th className={"text-center"}>곡명</th>
                       <th className={"text-center"}>가수</th>
                       <th className={"text-center"}>앨범</th>
                   </tr>

                   </thead>
                   <tbody>
                   {html}
                   </tbody>
               </table>
           </div>
       </div>
    )
}
const Header=()=>{
    const color=["red","blue","green","pink","magenta"]
    const no=parseInt(Math.random()*5)
    return (
        <h1 className={"text-center"} style={{"color":color[no]}}>Music Top50</h1>
    )
}
const Header2=function(){
    return (
        <h1 className={"text-center"}>Music Top5</h1>
    )
}
function Header3(){
     return (
         <h1 className={"text-center"}>Music Top5</h1>
     )
}

export default App1