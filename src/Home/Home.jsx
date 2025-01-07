import moment from 'moment';
import Marquee from "react-fast-marquee";

const Home = () => {

    // const authInfo = useContext(AuthContext);
    // console.log(authInfo);

    return (
        <div>
            {/* <h1>Home: {authInfo.name}</h1> */}
            <h1>Welcome Home.</h1>
            {/* <p>Time: <span>Tuesday, September 17, 2024 </span></p> */}
            <p>Time: <span>{moment().format("dddd, MMMM D, YYYY")}</span></p>

            <div className="">
                <Marquee pauseOnHover={true} speed={100} direction="left" style={{ height: "30px" }}>
                    <span>Important Announcement: This is a test announcement.</span>
                    <span>Another important announcement: This is another test announcement.</span>
                </Marquee>
            </div>

        </div>
    );
};

export default Home;