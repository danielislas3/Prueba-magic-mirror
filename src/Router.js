import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./components/Home";
import Personajes from "./components/Personajes";
import Episodios from "./components/Episodios";
import Registro from "./components/Registro";
import Detalles from "./components/Detalles";


export default function Router() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Personajes} />
          <Route exact path="/character/:id" component={Detalles} />
          <Route exact path="/episodes" component={Episodios} />
          <Route exact path="/login" component={Registro} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
