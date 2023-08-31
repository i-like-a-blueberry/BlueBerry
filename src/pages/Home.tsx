import NewButton from "../component/NewButton";
import { Box } from "@chakra-ui/react";
const Home = () => {
    function onsubmit() {
        console.log("aaa")
    }

    return (
        <div>
            <h1>Home</h1>'
            <Box>hello</Box>
            <NewButton onClick={onsubmit}>aaa</NewButton>
            <NewButton><div>a</div></NewButton>
        </div>
    )
}

export default Home;

