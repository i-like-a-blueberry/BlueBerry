import { ReactNode } from 'react';

export type NewButtonProps = {
    children: ReactNode,
    onClick?: () => void,
    isLoading?: boolean | undefined
}

export type BodyContainerProps = {
    children: ReactNode,
}