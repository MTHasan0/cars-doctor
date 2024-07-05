import About from "./About";
import Availabilities from "./Availabilities";
import Banner from "./Banner";
import Products from "./Products";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Availabilities></Availabilities>
            <Products></Products>
        </div>
    );
};

export default Home;