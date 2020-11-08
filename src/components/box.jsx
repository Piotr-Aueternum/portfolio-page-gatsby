import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import * as R from 'ramda';

export const Wrapper = styled.div`
    display: block;
    padding: 24px 16px;
    background: ${props => props.theme.boxBackgroundPrimary};
    border-radius: ${props => props.theme.box.border.medium};
    box-shadow:  ${props => props.theme.box.shadow.medium};
`;


const insideBox = R.assocPath(['box', 'shadow', 'small'], 'none');

export const Box = (props) => (
    <ThemeProvider theme={insideBox}>
        <Wrapper {...props} />
    </ThemeProvider>
)