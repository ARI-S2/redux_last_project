import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFindList,fetchFindPage} from "../../actions/foodActions";

function FoodFind(){
    const [fd,setFd]=useState('마포')
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchFindList(curpage,fd))
        dispatch(fetchFindPage(fd))
    }, [fd,curpage]);

    return (
        <Fragment>
            <div className={"row"}>
                <input type={"text"} size={"20"} className={"input-sm"}/>
                <input type={"button"} value={"검색"} className={"btn-sm"}/>
            </div>
            <div style={{"height":"30px"}}></div>
        </Fragment>
        )
}

export default FoodFind