import {Fragment, useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {fetchRecipeDetail,fetchRecipePoster,fetchRecipeMake} from "../actions/foodActions";
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import * as path from "path";
// useSelector => store 안에 있는 데이터를 선택해서 가지고 온다
// useDispatch => action 에 있는 함수 호출 => reducers => store

function RecipeDetail() {
    const nav = useNavigate()
    const {no} = useParams() // getParameter("no")
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetail(no)) // action에 함수 호출 => store에 저장완료
        dispatch(fetchRecipeMake(no))
        dispatch(fetchRecipePoster(no))
    }, []);
    // [curpage] => []안의 내용이 변경되면 재호출
    // => react=query useQuery() , useQueues => 새로운 내용이 있는 경우 자동 재호출
    const recipe_detail = useSelector((state)=>state.foods.recipe_detail)
    const recipe_makes = useSelector((state)=>state.foods.recipe_makes)
    const recipe_posters = useSelector((state)=>state.foods.recipe_posters)
    const recipe_data=recipe_detail.recipe
    //const recipe_imgages=recipe_data.posters
    //const recipe_make=recipe_data.make
    let html = recipe_makes.map((m,index)=>
        <tr>
            <td className={"text-center"}>{m}</td>
            <td className={"text-right"}>
                <img src={recipe_posters[index]} style={{"width":"120px","height":"80px"}}/>
            </td>
        </tr>
    )
    return (
        <div className={"row"}>
            <table className={"table"}>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <img src={recipe_data.poster} style={{"width": "600px", "height": "200px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <h3 className={"text-center"}>{recipe_data.title}</h3>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_data.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={process.env.p"/icon/a1.png"}/> </td>
                    <td className={"text-center"}><img src={"http://localhost:3000/icon/a2.png"}/></td>
                    <td className={"text-center"}><img src={"http://localhost:3000/icon/a3.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_data.info1}</td>
                    <td className={"text-center"}>{recipe_data.info2}</td>
                    <td className={"text-center"}>{recipe_data.info3}</td>
                </tr>
                <tr>
                    <td className={"text-center"}></td>
                    <td className={"text-center"}></td>
                    <td className={"text-center"}></td>
                </tr>
            </table>
            <table className={"table"}>
                <caption><h3>조리방법</h3></caption>
                <tbody>
                     {html}
                </tbody>
            </table>
            <table className={"table"}>
                <tr>
                    <td className={"text-center"} rowSpan={"2"}>
                        <img src={recipe_data.chef_poster} style={{"width": "150px", "height": "100px"}}/>
                    </td>
                    <td>{recipe_data.chef}</td>
                </tr>
                <tr>
                    <td>{recipe_data.chef_profile}</td>
                </tr>
                <tr>
                    <td>{recipe_data.chef_profile}</td>
                </tr>
            </table>
        </div>
    )
}

export default RecipeDetail