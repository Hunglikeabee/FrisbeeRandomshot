import { useState, useRef, useEffect } from "react";
import { StyledView, StyledText, StyledSmallText, StyledTextInput, StyledButton, StyledFlexContainer, PlussButton, StyledListContainer, StyledList, StyledRemoveButton, StyledSmallRemoveButton, StyledScrollView } from "../../styling/GlobalStyling";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { discKey } from "../constants/Constants";

export default function DiscSelector() {

  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(discKey)
        return jsonValue != null ? setList(JSON.parse(jsonValue)) : null;
      } catch(e) {
        console.log(e)
      }
    }
    getData();
},[])

  const myTextInput = useRef();
  const [currentText, setText] = useState(null)
  const [list, setList] = useState([])
  const [error, setError] = useState(false)


  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem(discKey, JSON.stringify(list))
      } catch (e) {
        console.log(e)
      }
    }
    storeData();
  }, [list])

  const handleList = (text) => {
    setError(false)
    console.log(text)
    if(!text) {
      setError(true)
    }
    else {
      setList(oldList => [...oldList, text])
    }
    myTextInput.current.clear()
    setText(null)
  }

  const handleRemoveDisc = () => {
    setList([]);
  }

  const handleRemoveOne = (itemKey) => {
    const filterList = list.filter((item, key) => key !== itemKey)
    setList(filterList)
  }

  const handleGoPlay = () => {
    if(list.length === 0) {
      setError(true)
    }
    else {
      navigation.navigate("PlayGame")
    }
  }

  return (
    <StyledScrollView>
    <StyledView>
      <StyledFlexContainer>
        <StyledTextInput ref={myTextInput} placeholder="Enter disk...." onChangeText={text => setText(text)} onSubmitEditing={text => handleList(currentText)} />
        <PlussButton onPress={() => handleList(currentText)}><FontAwesomeIcon icon={faPlus} /></PlussButton>
      </StyledFlexContainer>
        <StyledButton onPress={() => handleGoPlay()}><StyledText>LETS GO!</StyledText></StyledButton>
        <StyledRemoveButton onPress={() => handleRemoveDisc()}><StyledSmallText>Clear all</StyledSmallText></StyledRemoveButton>
      <StyledListContainer>
        {error && <StyledText>No disc picked</StyledText>}
        {list.length > 0 ? list.map((item, key) => {
          return <StyledFlexContainer key={key}>
                  <StyledList style={{textTransform: "uppercase"}} >{item}</StyledList>
                  <StyledSmallRemoveButton onPress={() => handleRemoveOne(key)}><FontAwesomeIcon icon={faX} /></StyledSmallRemoveButton>
                 </StyledFlexContainer>
        }) : <StyledSmallText color="black">Choose your discs...</StyledSmallText>}
      </StyledListContainer>
    </StyledView>
    </StyledScrollView>
  );
}
