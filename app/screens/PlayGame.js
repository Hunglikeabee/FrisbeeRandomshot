import { StyledView, StyledText, StyledButton, StyledPickView, StyledPickText, StyledScrollView} from "../../styling/GlobalStyling";
import { useEffect, useState } from "react";
import { discKey } from "../constants/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "./components/Logo";
import { Picker } from "@react-native-picker/picker";

 const normalList = ["backhand", "forehand", "backhand", "forehand", "backhand", "forehand", "backhand", "forehand", "tomahawk", "offhand" ]
 const mixedList = ["backhand", "forehand", "backhand", "forehand", "roller", "tomahawk", "offhand", "bag on"]
 const crazyList = ["backhand", "forehand", "roller", "tomahawk", "offhand", "360", "chickenwing", "blindfolded", "bag on", "grenade", "mini"]

export default function PlayGame() {

  const [list, setList] = useState([])
  const [discUse, setDisc] = useState(null)
  const [throwUse, setThrow] = useState(null)
  const [loading, setLoading] = useState(false)

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

  const handleRandomize = () => {
    let throwList = normalList

    if(currentValue === "normalList") {
      throwList = normalList
    }
    else if(currentValue === "mixedList") {
      throwList = mixedList
    }
    else if (currentValue === "crazyList") {
      throwList = crazyList
    }
    else {
      throwList = []
    }

    const listLength = list.length;
    const randomDisc = Math.floor(Math.random() * (listLength - 0) + 0);
    setDisc(list[randomDisc])
    const throwLength = throwList.length;
    const randomThrow = Math.floor(Math.random() * (throwLength - 0) + 0);
    setThrow(throwList[randomThrow])
    setLoading(false)


  }

  useEffect(() => {
    if(throwUse === "mini") {
      setDisc([])
    }

  }, [throwUse])

  // PICKER
  const [currentValue, setValue ] = useState("normalList");


  return (
    <StyledScrollView>
            <StyledView>
                {!discUse && <Logo />}
                {!discUse && <StyledText>Click roll to get your throw</StyledText>}
                <StyledPickView>
                  {discUse && <StyledPickText>{discUse}</StyledPickText>}
                  {throwUse && <StyledPickText>{throwUse}</StyledPickText>}
                </StyledPickView>
                <Picker
                  selectedValue={currentValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                  }>
                  <Picker.Item label="Disc only" value="onlyDisc" />
                  <Picker.Item label="Normal" value="normalList" />
                  <Picker.Item label="Intense" value="mixedList" />
                  <Picker.Item label="EXTREME!" value="crazyList" />
                </Picker>
                <StyledButton onPress={() => handleRandomize()}><StyledText>ROLL</StyledText></StyledButton>
            </StyledView>
    </StyledScrollView>
  )
}