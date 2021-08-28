import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { Main, Sub } from "./pages";
import { GlobalStyle } from "./theme/GlobalStyle";

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <GlobalStyle />
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/sub" component={Sub} />
                    </Switch>
                </Suspense>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
