
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Row, Avatar, Badge } from "antd";
import NavBar from "../NavBar";
import ApiFetch from "../../services/ApiClass";
const Api = new ApiFetch();

export default function DetalleCharacter(props) {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async function fetchData() {
      const response = await Api.getOneCharacter(id);
      setCharacter(response);
    })();
  }, [id]);

  return (
    <>
      <NavBar />
      <div style={{ padding: "30px", marginTop: "5%", display: "flex" }}>
        <div style={{ paddingLeft: 20, paddingRight: 30, marginTop: 45 }}>
          <Avatar size={200} shape="square" icon="user" src={character.image} />
        </div>
        <div>
          <Row gutter={16} align="middle">
            <Descriptions
              title={character.name}
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Status">
                <Badge status="processing" text={character.status} />
              </Descriptions.Item>
              <Descriptions.Item label="Specie">
                {character.species}
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                {character.type ? character.type : "unknow"}
              </Descriptions.Item>
              <Descriptions.Item label="Origin">
                {character.origin ? character.origin.name : "..."}
              </Descriptions.Item>
              <Descriptions.Item label="Location">
                {character.location ? character.location.name : "..."}
              </Descriptions.Item>
            </Descriptions>
          </Row>
        </div>
      </div>
    </>
  );
}
