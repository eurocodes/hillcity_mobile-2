import styled from "styled-components/native";
import { colors } from "./colors";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.themeColor};
  `;

export const HomeView = styled.View`
  background-color: ${colors.themeColor};
  `;

export const HomeTopView = styled.View`
  padding: 40px 16px 20px 16px;
  flex-direction: row;
  justify-content: space-between;
  `;

export const IconsContainer = styled.View`
flex-direction: row;
`;

export const HomeLowerView = styled.View`
padding: 16px;
`;

export const TopText = styled.Text`
color: ${colors.white};
font-size: 20px;
`;

export const SearchContainer = styled.View`
padding: 6px 16px;
flex-direction: row;
background-color: ${colors.tint};
border-radius: 20px;
margin: 20px 0;
align-items: center;
`;

export const SearchInner = styled.View`
flex-direction: row;
width: 100%;
`;

export const BodyContent = styled.View`
padding: 20px;
flex-direction: row;
background-color: ${colors.background};
/* border-top-left-radius: 20px; */
`;

export const BodyHeaderText = styled.Text`
font-size: 20px;
justify-content: space-between;
align-items: center;
`;

export const LowerScrollView = styled.ScrollView`
background-color: ${colors.background};
`;

export const AppointmentView = styled.View`
background-color: ${colors.white};
flex-direction: row;
margin: 4px 16px;
border-radius: 20px;
padding: 20px 24px;
align-items: center;
justify-content: space-between;
`;

export const AppointmentInner = styled.View`
flex-direction: row;
align-items: center;
`;

export const AppointTextView = styled.View``;

export const AppointText = styled.Text`
font-size: 16px;
margin-left: 10px;
color: ${props => props.color}
`;

export const AppointActions = styled.View`
flex-direction: row;
`;

export const FloatingActionBtn = styled.TouchableOpacity`
position: absolute;
width: 56px;
height: 56px;
align-items: center;
justify-content: center;
right: 20px; 
bottom: 20px;
background-color: #03A9F4;
border-radius: 30px;
elevation: 8;
`;

export const AddIcon = styled.Text`
font-size: 40px;
color: white;
`;

    // Define what props.theme will look like
    // const theme = {
    //     fg: "mediumseagreen",
    //     bg: "white"
    // };

    // // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
    // const invertedTheme = ({ fg, bg }) => ({
    //     fg: bg,
    //     bg: fg
    // })