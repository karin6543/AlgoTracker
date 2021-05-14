import styled, {createGlobalStyle, css} from 'styled-components'
import React from 'react'

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }
    body {
        font-family:Arial, Helvetica, sans-serif;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,237,245,0.10968137254901966) 45%, rgba(0,212,255,1) 100%);   
        height:100%;
        margin:0;
        color:#000;
    }
`;

export const sharedStyle = css `
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0 20px 0;
    padding:20px;
    box-sizing: border-box
`

export const StyledFormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 80vh;
    padding:0 20px;
`

export const StyledContainer = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    height: 25vh;
    width:90%;
    padding:10px;
    background-color:#fff;
    border-radius:10px;
    box-sizing:border-box;
    box-shadow:0px 0px 20px 0px rgbe(0,0,0,0.2);
    opacity:90%;
    `;


export const StyledForm = styled.form`
    width:100%;
    max-width:700px;
    padding:40px;
    background-color:#fff;
    border-radius:10px;
    box-sizing:border-box;
    box-shadow:0px 0px 20px 0px rgbe(0,0,0,0.2);
    margin-left:18%
`

export const StyledInput = styled.input`
    display:block;
    width:100%;
    ${sharedStyle}
`

export const StyledTextArea = styled.textarea`
    background-color:#eee;
    width:100%;
    min-height:100px;
    resize:none;
    ${sharedStyle};
`

export const StyledButton = styled.button`
    display:block;
    background-color:#c3d2f1;
    color:#fff;
    font-size:1rem;
    border:0;
    border-radius:5px;
    height:40px ;
    padding:0 20px;
    cursor: pointer;
    box-sizing:border-box;
    
    
`

export const StyledFieledSet = styled.fieldset`
    border:1px solid #dddd;
    border-radius:5px;
    padding:10px;
    margin:20px 0;
    legend {
        padding:0 10px;
    }
    label {
        padding-right:20px
    }
    input {
        margin-right:10px
    }
`

export const MasterContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
`


export const StyledError = styled.div`
    color:red;
    font-weight:800;
    margin:0 0 40px;
`
function Styled() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledFormWrapper>

                <StyledForm>
                    <h2>Add Robot</h2>
                    <label htmlFor="name">Robot Name</label>
                    <StyledInput type="text" name="name" />

                    <label htmlFor="fuelLevel">Fuel Level</label>
                    <StyledInput type="text" name="fuelLevel" />

                    <StyledFieledSet>
                        <legend>Fuel Type</legend>
                        <label>
                            <input type="radio" value="electric" name="fuelType" /> Eletric
                        </label>
                        <label>
                            <input type="radio" value="gas" name="fuelType" />Gas
                        </label>
                        <label>
                            <input type="radio" value="disel" name="fuelType" />Disel
                        </label>

                    </StyledFieledSet>
                    <StyledError>Error Message</StyledError>
                    <StyledButton>Add</StyledButton>


                </StyledForm>
            </StyledFormWrapper>
        </React.Fragment>
    )
}

export default Styled