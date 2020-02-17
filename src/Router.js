import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./components/Home";
import Personajes from "./components/Personajes/Personajes";
import DetalleCharacter from "./components/Personajes/DetalleCharacter";
import Episodios from "./components/Episodios/Episodios";
import DetalleEpisode from "./components/Episodios/DetalleEpisode";
import Registro from "./components/Registro";

export default function Router() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Personajes} />
          <Route exact path="/character/:id" component={DetalleCharacter} />
          <Route exact path="/episodes" component={Episodios} />
          <Route exact path="/episode/:id" component={DetalleEpisode}/>
          <Route exact path="/login" component={Registro} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
