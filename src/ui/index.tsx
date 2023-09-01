import { Button, Box } from "@chakra-ui/react";
import { FC } from 'react'
import { NewButtonProps, BodyContainerProps } from "./type";


export const NewButton: FC<NewButtonProps> = ({ children, onClick, isLoading }) => {
    return (
        <Button isLoading={isLoading || false} color='white' background={'red'} onClick={onClick}>
            {children}
        </Button>
    )
}

export const BodyContainer: FC<BodyContainerProps> = ({ children }) => {
    return (
        <Box textAlign={'center'} m='0 24px'>{children}</Box>
    )
}