import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/HomeScreen';
import CocktailList from "../components/CocktailList";

const screens = {
    Home: {
        screen: Home
    },
    CocktailList: {
        screen: CocktailList
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);