import styled from "styled-components/native";

const StyledLogo = styled.Image`
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 150px;
`;

export default function Logo() {
  return <StyledLogo source={require("../../../assets/logoefk.png")} />;
}
