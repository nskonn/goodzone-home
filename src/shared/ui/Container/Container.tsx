import React, { FC, ReactNode } from 'react';
import { StyledContainer } from './Container.styles';

interface ContainerProps {
    children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};
