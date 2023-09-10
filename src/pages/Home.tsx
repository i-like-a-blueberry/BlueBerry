import { useState } from 'react'
import { NewButton, BodyContainer } from "../ui";
import Receipt from '../component/Receipt';
import { Box, useToast, Input, Text, IconButton } from "@chakra-ui/react";
import { getRepos, getLangs } from '../api';
import errorHandler from '../api/errorHandling';
import { RepeatIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import { addReceipt } from '../api/addReceipt';


interface LangData {
    [key: string]: number;
}

const Home = () => {
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [langUsed, setLangUsed] = useState<object>({});
	const [isSucceeded, setIsSucceeded] = useState<boolean>(false);
    const toast = useToast();
	const navigate = useNavigate();

    const resStatus = () => {
        toast({
            title: 'error',
            description: "please input valid username",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }


    const langsSum = async (data: { languages_url: string }[]) => {
        const repoLangs: LangData[] = [];
        for (let i = 0; i < data.length; i++) {
            const langsUrl: string = data[i].languages_url;
            const langs: { data: LangData } = await getLangs(langsUrl);
            repoLangs.push(langs.data);
        }

        let langBytes: object = {}
        for (let i = 0; i < repoLangs.length; i++) {
            const repoLang: LangData = repoLangs[i];
            Object.keys(repoLangs[i]).forEach((key) => {
                if (langBytes[key as keyof object] !== undefined) {
                    const val = Number(langBytes[key as keyof object]) + Number(repoLang[key]);
                    langBytes = { ...langBytes, [key]: val }

                } else {
                    langBytes = { ...langBytes, [key]: repoLang[key] };
                }
            })
        }
        addReceipt(langBytes, name);
        setLangUsed(langBytes);
        console.log(langBytes)
    }


    const onsubmit = async () => {
        setIsLoading(true);
        if (name) {
            const res = await getRepos(name).catch((error) => {
				resStatus();
				console.log("ejdfjdlsa;jfdkls;ajfdk;lsa")
                errorHandler(error);
            });
            if (res) {
                const data = res.data;
                await langsSum(data);
                setIsLoading(false);
				setIsSucceeded(true);
                return;
            }
        }
        setIsLoading(false);
        resStatus();
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
		<Box>
        	<BodyContainer width={"100%"}>
								{(() => {
					if(!isSucceeded){
						return (
							<>
								<Text fontSize={"2xl"}  m="16px 0">
									あなたの技術スタックをレシートにする
								</Text>
        	    				<Input type="text" value={name} variant={"filled"} placeholder={"your GitHub ID"} onChange={handleInputChange} />
								<Box pt={"40px"}>
        	    					<NewButton isLoading={isLoading} onClick={onsubmit}>
										レシートを発行する
									</NewButton>
								</Box>
							</>
						)
					} else {
						return (
							<>
								<IconButton onClick={() => navigate(0)}  icon={<RepeatIcon />}/>
        	   					<Receipt langs={langUsed}/>
							</>
						)
					}
				})()}
        	</BodyContainer>
		</Box>
    )
}

export default Home;

