import { Card, CardBody, Text, } from "@chakra-ui/react";
const Receipt = () => {
    const title = "Blue Berry"
    const subtitle = "より最適な情報をあなたに";
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    return (
        <Card>
            <CardBody
                borderStyle="solid"
                borderWidth="5px"
                borderColor="black"
            >
                <Text>
                    親切なアプリ
                </Text>
                <Text
                    fontSize={"6xl"}
                    fontWeight="bold"
                >{title}
                </Text>
                <Text>
                    {subtitle}
                </Text>
            </CardBody>
            <Text>
                ☆☆☆毎度ご利用ありがとうございます☆☆☆
            </Text>
            <Text>
                {`${year}年${month}月${day}日  ${hour}時${minutes}分`}
            </Text>
            <Text
            borderStyle="solid"
            borderWidth="2px"
            borderColor="black"
            ml={"40vh"}
            mr={"40vh"}
            fontSize="2xl"
            fontWeight="bold"
            >
                ご利用明細
            </Text>
            <Text>
                {}
            </Text>

        </Card>
    )
}

export default Receipt;