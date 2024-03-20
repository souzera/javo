import { useEffect, useState } from "react";
import { Call } from "../../types/call";
import ChamadoContainer from "./ChamadoContainer";
import { useSelector } from "react-redux";
import { getCallsByEquipe } from "../../services/call/get-calls";
import { Col, Flex, Row } from "antd";

interface DragableListChamadoProps {
  colunas: number;
}

export function DragableListChamado(props: DragableListChamadoProps) {
  const [chamados, setChamados] = useState<Call[]>([]);

  const { currentEquipe } = useSelector((state: any) => state.equipeReducer);

  useEffect(() => {
    if (currentEquipe) {
      getCallsByEquipe(currentEquipe).then((response) => {
        setChamados(response);
      });
    }
  }, [currentEquipe]);

  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  const span = (24 / props.colunas) | 0;

  console.log(span);

  return (
    <>
      <Row 
      align='stretch'
      gutter={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
        {chamados.map((chamado, index) => {
          return (
            <Col className='m-2' key={index}>
              <ChamadoContainer chamado={chamado} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
