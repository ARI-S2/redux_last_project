import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import store from "./store/store";
import {Provider} from "react-redux";
import FoodDetail from "./components/food/FoodDetail";
import RecipeList from "./recipe/RecipeList";
import RecipeDetail from "./recipe/RecipeDetail";
import FoodFind from "./components/food/FoodFind";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className={"container"}>
          <Routes>
            <Route path={"/food/food_list"} element={<Home/>}/>
            <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
            <Route path={"/"} element={<RecipeList/>}/>
            <Route path={"/recipe/recipe_detail/:no"} element={<RecipeDetail/>}/>
            <Route path={"/food/find"} element={<FoodFind/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
//recipe/recipe_list