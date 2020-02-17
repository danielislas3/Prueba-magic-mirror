import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";
const { Header } = Layout;

export default function NavBar() {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu
        theme="dark"
        style={{ lineHeight: "64px" }}
        mode="horizontal"
        defaultSelectedKeys={["characters"]}
      >
        <Menu.Item key="home">
          <NavLink to="/">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item key="characters">
          <NavLink to="/characters">Personajes</NavLink>
        </Menu.Item>
        <Menu.Item key="episodes">
          <NavLink to="/episodes">Episodios</NavLink>
        </Menu.Item>
        <Menu.Item key="login">
          <NavLink to="/login">Registro</NavLink>{" "}
        </Menu.Item>
      </Menu>
    </Header>
  );
}
