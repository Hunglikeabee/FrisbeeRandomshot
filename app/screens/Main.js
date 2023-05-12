import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyledView, StyledText, StyledButton, StyledAbout, StyledSmallText, StyledScrollView, StyledCloseButton } from '../../styling/GlobalStyling';
import Logo from './components/Logo';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Main() {

  const navigation = useNavigation();

  const [showAbout, setAbout] = useState(false)

  return (
    <StyledScrollView>
      <StyledView>
        <Logo />
        <StyledText>DISK ROULETTE</StyledText>
        <StyledButton onPress={() => navigation.navigate("DiscSelector")}><StyledText>CHOOSE YOUR DISCS!</StyledText></StyledButton>
        <StatusBar style="auto" />
        <StyledButton color="white" onPress={() => setAbout(prev => !prev)}><StyledText>About</StyledText></StyledButton>
        {showAbout &&
        <StyledAbout>
                      <StyledCloseButton onPress={() => setAbout(prev => !prev)}><FontAwesomeIcon icon={faX} /></StyledCloseButton>
                          <StyledText>Play Roulette</StyledText>
                          <StyledSmallText color="black">This app is for some extra fun on the course.
                          See if you can beat your friends.
                        </StyledSmallText>
                        <StyledSmallText color="black">First pick the discs you want to use on the round. </StyledSmallText>
                        <StyledSmallText color="black">Select if you want random type of shots or not, and how intense the mix of random types.</StyledSmallText>
                      </StyledAbout>}
      </StyledView>
    </StyledScrollView>
  )
}