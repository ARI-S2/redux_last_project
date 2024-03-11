import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to={"/"} className="navbar-brand">Redux</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><Link to={"/recipe/recipe_list"}>Recipe</Link></li>
                    <li><a href="#">Goods</a></li>
                    <li><Link to={"/food/find"}>FoodFind</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header