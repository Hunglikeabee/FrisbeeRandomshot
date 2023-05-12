import styled from "styled-components/native";

// Containers

export const StyledScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  `

export const StyledView = styled.View`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const StyledFlexContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px;
padding: 10px 15px;
background-color: white;
border-radius: 10px;
box-shadow: 0px 2px 5px black;
`

export const StyledListContainer  = styled.View`
margin: 0 auto;
width: 500px;
max-width: 95%;
text-align: left;
`

export const StyledPickView = styled.View`
margin: ${props => props.margin ? props.margin : 0};
`

export const StyledAbout = styled.View`
position: absolute;
background-color: white;
border-radius: 50px;
top: 30px;
left: 30px;
right: 30px;
bottom: 30px;
display: flex;
justify-content: space-evenly;
align-items: center;
`

//Text and inputs

export const StyledList = styled.Text`
font-family: "OpenSans";
text-align: left;
padding: 10px;
font-size: 20px;
overflow: hidden;
`

export const StyledText = styled.Text`
  font-family: "BebasNeue";
  font-size: 28px;
  text-align: center;
`

export const StyledSmallText = styled.Text`
font-family: "OpenSans";
text-align: center;
color: ${props => props.color ?  props.color : "white"};
padding: 10px;
font-size: 14px;
margin: 10px;
`

export const StyledTextInput = styled.TextInput`
flex: 1;
font-family: "OpenSans";
padding-left: 10px;

height: 60px;
background-color: white;
font-size: 22px;
`

export const StyledPickText = styled.Text`
  font-family: "BebasNeue";
  font-size: 36px;
  text-align: center;
  background-color: black;
  color: white;
  padding: 50px 0px;
`


// Buttons
export const StyledButton = styled.Pressable`
font-family: "BebasNeue";
background-color: ${props => props.color ? props.color : "lightgreen"};
width: 80%;
border-radius: 50px;
margin: 20px auto;
text-align: center;
padding: 20px;
margin-bottom: 10px;
box-shadow: 0px 2px 5px black;
`

export const PlussButton = styled.Pressable`
background-color: lightgreen;
display: flex;
justify-content: center;
align-items: center;
height: 60px;
width: 50px;
box-shadow: 0px 2px 3px black;
`

export const StyledRemoveButton = styled.Pressable`
width: 40%;
margin: 20px auto;
border-radius: 50px;
background-color: black;
box-shadow: 0px 2px 5px black;
`

export const StyledSmallRemoveButton = styled.Pressable`
width: 30px;
height: 30px;
background-color: lightcoral;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 5px black;
`

export const StyledCloseButton = styled.Pressable`
width: 80px;
height: 80px;
background-color: lightcoral;
position: absolute;
top: -10px;
right: -10px;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
`

export const StyledImageButton = styled.Pressable`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
`