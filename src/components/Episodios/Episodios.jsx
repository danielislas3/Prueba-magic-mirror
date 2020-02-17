import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import ApiFetch from "../../services/ApiClass";
import NavBar from "../NavBar";
const Api = new ApiFetch();
const { Meta } = Card;

export default function Episodios() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await Api.getEpisodes(30);
      setEpisodes(response);
    })();
  }, []);
  console.log(episodes);

  return (
    <div>
      <NavBar />
      <h2>Personajes</h2>
      <br />
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16} align="middle">
          {episodes.map((episode, index) => (
            <Col span={6} key={index}>
              <Card
                key={index}
                style={{ width: 300 }}
                cover={
                  <img
                    alt={episode.name}
                    src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/04/27/15248451158054.jpg"
                  />
                }
              >
                <Meta title={episode.name} description={episode.air_date} />
                <br />
                <Link to={`episode/${episode.id}`}> More</Link>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
