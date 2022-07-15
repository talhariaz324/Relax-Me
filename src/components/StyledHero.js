import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  /* We can use javascript code now and getting dynamic images because of props */
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
