import React from "react"
import styled from "styled-components"
import SEO from "../layout/seo"
import { Link } from "gatsby"
import WaveBackground from "../backgrounds/WaveBackground"
import Boton from "../botones/BotonLink"
import Footer from "../sections/Footer"
import Blue from "../backgrounds/BlueBack"

class Inicio extends React.Component {
  render() {
    return (
      <Wrapper>
        <Innerwrapper>
          <Contentwrapper>
            <Blue />
            <SEO title="VallesMD" />
            <TextTop>
              <Title>Valles MD</Title>
              <Subtitulo2>
                ------------------------------------------------
              </Subtitulo2>
              <Subtitulo>Bienvenidos a la WebApp de formulas</Subtitulo>
              <ButtonWrapper>
                <Link to="/page-2">
                  <Boton text="Dopamina" />
                </Link>
                <Link to="/page-3/">
                  <Boton text="Dobutamina" />
                </Link>
                <Link to="/page-4/">
                  <Boton text="Deficit de Agua" />
                </Link>
                <Link to="/page-5/">
                  <Boton text="Bicarbonato" />
                </Link>
                <Link to="/page-6/">
                  <Boton text="Na Corregido" />
                </Link>
                <Link to="/page-7/">
                  <Boton text="Alteplase" />
                </Link>
                <Link to="/page-8/">
                  <Boton text="Osmolaridad" />
                </Link>
                <Link to="/page-9/">
                  <Boton text="SIR" />
                </Link>
                <Link to="/page-10/">
                  <Boton text="Hiperton" />
                </Link>
                <Link to="/page-11/">
                  <Boton text="Liquidos" />
                </Link>
              </ButtonWrapper>
              <Footer />
            </TextTop>
          </Contentwrapper>
        </Innerwrapper>
      </Wrapper>
    )
  }
}

export default Inicio

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Innerwrapper = styled.div`
  z-index: -1;
`
const Contentwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  grid-gap: 15px;
  margin-top: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-left: 40px;
  z-index: 3;
`
const TextTop = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 30px;
  z-index: 3;
`
const Title = styled.h1`
  font-size: 40px;
  color: black;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Subtitulo = styled.h2`
  font-size: 16px;
  color: black;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Subtitulo2 = styled.h2`
  font-size: 16px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
