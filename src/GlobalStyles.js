import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');
*{
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
     @media only screen and (max-width: 600px){
        font-size: 50%;
        min-height: 100vh;
        height: -webkit-fill-available;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1;
    font-size: 1.6rem;
    background: #faf1e6ad;
    color: #333;
    @media only screen and (max-width: 600px){
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }
    
}
`;

export default GlobalStyles;


export const Container = styled.div`
padding: 16px;
margin: 0 auto;
max-width: 1000px;
width: 100%;
@media screen and (max-width:600px){
  margin: 3px, auto
  padding: 0 5px;
}
@media screen and (max-width:991px) {
  padding: 0 20px;
}
`;


export const Button = styled.button`
  background-color: white;
  color: #51adcf;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 2px solid #51adcf;
  &:hover {
    background-color: #95e1d3;
    color: #0f3057
  } 
`;

export const PlaceButton = styled.button`
  background-color: white;
  color: #51adcf;
  font-size: 12px;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 1px solid #51adcf;
  margin: 10px auto 0px;
  &:hover {
    background-color: #95e1d3;
    color: #0f3057
  } 
`;

export const SpecialButton = styled.button`
  background-color: #51adcf;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 2px solid #51adcf;
  &:hover {
    background-color: #95e1d3;
    color: #0f3057
  } 
`;

export const FriendButton = styled.button`
  color: white ;
  background-color: #95e1d3;
  font-size: 12px;
  margin: .5em;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #95e1d3;
  &:hover {
    color: white;
    background-color: #51adcf;
  } 
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
  
`;

export const Input = styled.input`
  margin: 7px auto;
  width: 100%;
  font-size: 16px;
  border: solid 0.5px #1F817F;
  border-radius: 3px;
  color: orange;
  padding: 5px 40px;
  border-radius: 3px;
  color: #040c48;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  background: #fafafa
  &:active,
  &:focus {
    text-align: left;
  };
  &:focus::-webkit-input-placeholder {
  transition: opacity 0.4s 0.4s ease!important;
  opacity: 0.30;
  }
`;

export const Label = styled.label`
	margin-bottom: 0.25em;
	color: white;
`;

export const Select = styled.select`
  border: solid 0.5px #1F817F;
  border-radius: 3px;
  height: 30px;
  @media screen and (max-width: 600px) {
    height: 2rem;
  }
`
