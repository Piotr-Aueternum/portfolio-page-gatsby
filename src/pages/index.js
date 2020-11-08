import React from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { Box } from "../components/box";
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #ededed;
  }
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Container = styled.div`
  padding-top: 120px;
  margin: 0 auto;
  max-width: 980px;
`;

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 90px;
`;

const Card = (props) => (
  <Box>
    <Title>
      {props.title}
    </Title>
    <p>
      {props.content}
    </p>
  </Box>
);

const Button = styled.button`
  border: 1px hsl(205, 100%, 63%) solid;
  padding: 6px 12px;
  font-size: 16px;
  background: none;
  border-radius: ${props => props.theme.box.border.small};
  box-shadow: ${props => props.theme.box.shadow.small};
  color: inherit;
  &:active {
    background: #d3d3d3;
  }
`;

const theme = {
  boxBackgroundPrimary: '#ededed',
  box: {
    border: {
      small: '6px',
      medium: '12px',
    },
    shadow: {
      small: `
        8px 8px 16px #d3d3d3, 
        -8px -8px 16px #fdfdfd;
      `,
      medium: `
        20px 20px 36px #d3d3d3, 
        -20px -20px 36px #fdfdfd;
      `,
    },
  }
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <Container>

        <Row>
          <Card
            title="Title"
            content={(
              <>
                <ul>
                  <li>test1</li>
                  <li>test2</li>
                  <li>test3</li>
                  <li>test4</li>
                </ul>
                <Button children="Tekst"/>
              </>

            )}
          />
          <Card
            title="Title"
            content={(
              <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
              </ul>
            )}
          />
          <Card
            title="Title"
            content={(
              <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
              </ul>
            )}
          />
        </Row>
        <p style={{ marginTop: 20}}>
          <div style={{ marginBottom: 20}}>Cardbox</div>
          <Button>Outside</Button>
        </p>
      </Container>
    </ThemeProvider>
  );
}
