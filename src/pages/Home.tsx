import { useState } from 'react'
import { NewButton } from "../ui";
import { Box } from "@chakra-ui/react";

const Home = () => {
    const [name, setName] = useState('')

    function onsubmit() {
        fetch('https://api.github.com/users/YuSa0-6/repos')
            .then(result => result.json())
            .then((output) => {
                console.log('Output: ', output);

            }).catch(err => console.error(err));
    }


    const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        console.log({
            name
        });
    };

    const handleChangeName = (e: React.MouseEvent<HTMLElement, MouseEvent> | any) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Home</h1>'
            <Box>hello</Box>
            <NewButton onClick={onsubmit}>aaa</NewButton>
            {/* <form onSubmit={handleSubmit}>
                <input
                type="text"
                >

                </input>
            </form> */}
        </div>
    )
}

export default Home;

