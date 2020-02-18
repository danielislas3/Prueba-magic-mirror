import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Descriptions, Row, Avatar, Badge, Card, Col } from "antd";
import NavBar from "../NavBar";
import ApiFetch from "../../services/ApiClass";
const Api = new ApiFetch();
const { Meta } = Card;

export default function DetalleEpisode() {
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  const getCharacterId = arr => {
    return arr.map(e => Number(e.split("/").reverse()[0]));
  };

  useEffect(() => {
    (async function fetchData() {
      const response = await Api.getOneEpisode(id);
      const responseCharacters = await Api.getSpecificCharacters(
        getCharacterId(response.characters)
      );

      setEpisode(response);
      setCharacters(responseCharacters);
    })();
  }, [id]);
  console.log(characters);

  return (
    <>
      <NavBar />
      <div style={{ padding: "30px", marginTop: "5%", display: "flex" }}>
        <div style={{ paddingLeft: 20, paddingRight: 30, marginTop: 45 }}>
          <Avatar
            size={200}
            shape="square"
            icon="user"
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/04/27/15248451158054.jpg"
          />
        </div>
        <div>
          <Row gutter={16} align="middle">
            <Descriptions
              title={episode.name}
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Air date">
                <Badge status="processing" text={episode.air_date} />
              </Descriptions.Item>
              <Descriptions.Item label="Episode">
                {episode.episode}
              </Descriptions.Item>
            </Descriptions>
          </Row>
        </div>
      </div>
      <Row gutter={16} align="middle" style={{ padding: 30 }}>
        <h2>Characters</h2>
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
              <Link to={`/character/${character.id}`}> More</Link>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </>
  );
}
