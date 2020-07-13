import React from "react";
import { ThemeProvider } from "styled-components";
import PageHeading from "./components/headings/PageHeading";
import Container from "./components/layout/Container";
import Input from "./components/form/Input";
import Form from "./components/form/Form";
import Button, { DangerButton } from "./components/form/Button";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <PageHeading>Register</PageHeading>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="City" colour="#5D94D5" />
                    <Button>Register</Button>
                    <DangerButton>Cancel</DangerButton>
                </Form>
            </Container>
        </ThemeProvider>
    );
}

export default App;
