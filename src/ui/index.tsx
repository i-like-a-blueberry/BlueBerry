import { Button, Box } from "@chakra-ui/react";
import { FC } from 'react'
import { NewButtonProps, BodyContainerProps, GhostButtonProps } from "./type";


export const NewButton: FC<NewButtonProps> = ({ children, onClick, isLoading }) => {
    return (
        <Button isLoading={isLoading || false} color='white' background={'red'}  onClick={onClick}>
            {children}
        </Button>
    )
}


export const BodyContainer: FC<BodyContainerProps> = ({ children, width }) => {
    return (
        <Box  alignItems={'center'} display={'flex'} flexDir={'column'} justifyContent={'center'} maxWidth={width} width={"100%"} m={"auto"}>{children}</Box>
    )
}


export const GhostButton: FC<GhostButtonProps> = ({ children, underlined }) => {
	return (
		<Button m="0 8px" p="0" isAttached={true} variant="ghost" borderRadius="0%" borderBottom={underlined? "solid black 2px" : ""}>
			{ children }
		</Button>
	)
}
