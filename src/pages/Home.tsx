import { useState, useEffect } from 'react'
import { NewButton, BodyContainer } from "../ui";
import Receipt from '../component/Receipt';
import { Box, useToast, Input, Text, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { getRepos, getLangs } from '../api';
import errorHandler from '../api/errorHandling';
import { RepeatIcon, DownloadIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import Tweet from "../component/TwitterLink"

interface LangData {
    [key: string]: number;
}

const Home = () => {
    const [gitHubId, setGitHubId] = useState<string>("");
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

	const toPng = () => {
		htmlToImage.toPng(document.getElementById(gitHubId))
			.then(function (dataUrl){
				const a = document.createElement('a')
				a.download = 'Image.png';
    			a.href = dataUrl;
    			a.click();
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

        setLangUsed(langBytes);
        console.log(langBytes)
    }


    const onsubmit = async () => {
        setIsLoading(true);
        if (gitHubId) {
            const res = await getRepos(gitHubId).catch((error) => {
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
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGitHubId(e.target.value);
    };

    useEffect(() => {}, [])

    return (
        	<BodyContainer width={"400px"}>
								{(() => {
					if(!isSucceeded){
						return (
							<>
								<Text fontSize={"2xl"}  m="16px 0">
									あなたの技術スタックをレシートにする
								</Text>
        	    				<Input type="text" value={gitHubId} variant={"filled"} placeholder={"your GitHub ID"} onChange={handleInputChange} />
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
								<Flex w="100%" m="8px 0">
									<IconButton shadow="md" mr="8px"  onClick={() => navigate(0)}  icon={<RepeatIcon />}/>
									<IconButton shadow="md" colorScheme="teal" onClick={() => toPng()} icon={<DownloadIcon />} />
								</Flex>
        	   					<Box id={gitHubId}>	
									<Receipt langs={langUsed} gitHubId={gitHubId}/>
								</Box>
							</>
						)
					}
				})()}
        	</BodyContainer>
    )
}

export default Home;

