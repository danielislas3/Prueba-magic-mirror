import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";

export default function NavBar() {
  return (
    <Menu mode="horizontal">
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
  );
}
