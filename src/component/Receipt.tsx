import { Card, CardBody, Text, Spacer, Flex, Box } from "@chakra-ui/react";
import { Day } from "../api/day";

type Props = {
    langs: object[],
	gitHubId: string
}


const Receipt = ({ langs,  gitHubId }: Props) => {

    return (
        <Card  shadow='md' mb={"5%"}>
            <CardBody
                borderStyle="solid"
                borderWidth="5px"
                borderColor="black"
                margin={'24px 24px 0 24px'}
            >
                <Text>
                    親切なアプリ
                </Text>
                <Text
                    fontSize={"8xl"}
                    fontWeight="bold"
                    fontFamily={"Comic Sans MS"}
                >
                    BlueBerry
                </Text>
                <Text>
                    より最適な情報をあなたに
                </Text>
            </CardBody>
            <CardBody
            // borderBottom={"2px dotted black"}
            >
                <Text textAlign={"center"}>
                    ☆☆☆毎度ご利用ありがとうございます☆☆☆
                </Text>
                <Text textAlign={'left'}>
                    <Day />
                </Text>
                <Text
                    borderStyle="solid"
                    borderWidth="2px"
                    borderColor="black"
                    fontSize="3xl"
                    fontWeight="bold"
                    textAlign={"center"}
                    mr={"30%"}
                    ml={"30%"}
                >
                    ご利用明細
                </Text>
                <Flex>
                    <Text>
                        Languages
                    </Text>
                    <Spacer />
                    <Text>
                        Bytes
                    </Text>
                </Flex>
                {(() => {
                    if (langs != null) {
                        return (
                            <>
                                {Object.keys(langs).map((key, i) => {
                                    return (
                                        <Box display={'flex'} key={i}>
                                            <Text> {key}</Text>
                                            <Spacer />
                                            <Text> {`${langs[key as keyof object]}`} bytes</Text>
                                        </Box>
                                    )
                                })}
                            </>
                        )
                    }
                })()}
				<Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign={"center"}
                    mr={"30%"}
                    ml={"30%"}
				>
					{gitHubId} 様
				</Text>
            </CardBody>
        </Card>
    )
}

export default Receipt;
