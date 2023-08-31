import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick?: () => void
}

const NewButton: FC<Props> = ({ children, onClick }) => {
    return (
        <Button color='white' background={'red'} onClick={onClick}>
            {children}
        </Button>
    )
}

export default NewButton;