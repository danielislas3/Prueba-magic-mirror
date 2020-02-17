import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import ApiFetch from "../services/ApiClass";
import NavBar from "./NavBar";
const Api = new ApiFetch();
const { Meta } = Card;

export default function Personajes() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await Api.getCharacters(30);
      setCharacters(response);
    })();
  }, []);
  console.log(characters);

  return (
    <div className="container">
      <NavBar />
      <h2>Personajes</h2>
      <br />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16} align="middle">
          {characters.map((character, index) => (
            <Col span={6} key={index}>
              <Card
                key={index}
                style={{ width: 300 }}
                cover={<img alt={character.name} src={character.image} />}
              >
                <Meta
                  title={character.name}
                  description={character.origin.name}
                />
                <br />
                <Link to={`character/${character.id}`}> More</Link>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
