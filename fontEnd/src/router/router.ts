import Chair from "../pages/Chair/router";
import Decor from "../pages/Decor/router";
import Home from "../pages/Home/router";
import Light from "../pages/Light/router";
import Plant from "../pages/Plant/router";
import Shop from "../pages/Shop/router";

const route = [...Chair, ...Decor, ...Home, ...Light, ...Plant, ...Shop];

export default route;
