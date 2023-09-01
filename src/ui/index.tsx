import { Button } from "@chakra-ui/react";
import { FC } from 'react'
import { NewButtonProps } from "./type";


export const NewButton: FC<NewButtonProps> = ({ children, onClick }) => {
    return (
        <Button color='white' background={'red'} onClick={onClick}>
            {children}
        </Button>
    )
}
