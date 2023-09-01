import { useState, useEffect } from 'react'
import { NewButton, BodyContainer } from "../ui";
import Receipt from '../component/Receipt';
import { Box, useToast, Input } from "@chakra-ui/react";
import { getRepos, getLangs } from '../api';
import errorHandler from '../api/errorHandling';

const Home = () => {
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast();

    const resStatus = () => {
        toast({
            title: 'error',
            description: "please input valid username",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }

    const langsSum = async (data: any) => {
        const  repoLangs: object[] = [];
        for (let i = 0; i < data.length; i++) {
            const langsUrl: string = data[i].languages_url;
            const langs: { data: string[] } = await getLangs(langsUrl);
            repoLangs.push(langs.data);
        }
        const langBytes: object = {}
        for (let i = 0; i < repoLangs.length; i++) {
            
        }
        console.log(repoLangs)
    }

    const onsubmit = async () => {
        setIsLoading(true);
        if (name) {
            const res = await getRepos(name).catch((error) => {
                errorHandler(error);
            });
            if (res) {
                const data = res.data;
                await langsSum(data);
                setIsLoading(false);
                return;
            }
        }
        setIsLoading(false);
        resStatus()
    }


    const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        //   console.log({
        //       name
        //   });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };


    return (
        <BodyContainer>
            <Box>hello</Box>
            <NewButton isLoading={isLoading} onClick={onsubmit}>send</NewButton>
            <Input type="text" value={name} onChange={handleInputChange} />
            <button type='submit'>Send</button>
            <Receipt />
        </BodyContainer>
    )
}

export default Home;

