import React from "react";
import NavBar from "./NavBar";
import useForm from "../hooks/useForm";
import { Row, Input, Col } from "antd";
import Swal from "sweetalert2";

export default function Registro() {
  const signup = () => {
    Swal.fire({
      icon: "success",
      title: `Usuario Registrado con exito!`,
      text: `Nombre: ${inputs.name}
      Email: ${inputs.email}
      Password: ${inputs.password} `,
      showConfirmButton: false,
      timer: 3500
    });
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(signup);

  return (
    <div>
      <NavBar />
      <Row type="flex" justify="center" align="center">
        <Col span={4}>
          <h2 style={{ paddingLeft: 20, paddingRight: 30, marginTop: 120 }}>
            Registro
          </h2>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Nombre"
                required
                onChange={handleInputChange}
                value={inputs.name}
              />
              <Input
                name="email"
                placeholder="Email"
                type="email"
                required
                onChange={handleInputChange}
                value={inputs.email}
              />
              <Input
                name="password"
                placeholder="Password"
                type="password"
                required
                onChange={handleInputChange}
                value={inputs.password}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
