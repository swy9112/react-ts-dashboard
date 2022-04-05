import { useQuery } from "react-query";
import styled from "styled-components";

interface IContanierProps {
  children: any;
  flexWrap?: string;
  grid?: string;
}

interface IWrapProps {
  flexWrap?: string;
  grid?: string;
}

const Wrap = styled.div<IWrapProps>`
  display: grid;
  grid-template-columns: repeat(${(props)=>props.grid}, 1fr);
  gap: 1em 2em;
  margin-bottom: 32px;
`

function Container({children, flexWrap, grid = "1"}:IContanierProps) {
  return (
    <Wrap flexWrap={flexWrap} grid={grid}>{children}</Wrap>
  )
}

export default Container;