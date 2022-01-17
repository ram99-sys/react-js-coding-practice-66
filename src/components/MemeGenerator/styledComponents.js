// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 100px;
  @media screen and (max-width: 1200px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const FormContainer = styled.div`
  width: 45vw;
  padding: 50px;
  @media screen and (max-width: 768px) {
    order: 1;
    width: 100vw;
  }
  @media screen and (max-width: 1200px) {
    width: 100vw;
  }
`

export const InputElementContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 20px;
  font-weight: 500;
`
export const Input = styled.input`
  color: #5a7184;
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid #d7dfe9;
  outline: none;
  border-radius: 10px;
  &:input:focus {
    outline: none;
    border: none;
  }
`
export const SelectElement = styled.select`
  color: #5a7184;
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid #d7dfe9;
  outline: none;
  border-radius: 10px;
  &:input:focus {
    outline: none;
    border: none;
  }
`
export const OptionElement = styled.option``

export const Heading = styled.h1`
  color: #35469c;
  font-weight: 40px;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 12px 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 24px;
`

export const ImageViewContainer = styled.div`
  background-image: url(${props => props.imgUrl});
  box-sizing: border-box;
  width: 45vw;
  height: 500px;
  background-size: cover;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    order: 0;
    width: 90vw;
    min-height: 0px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 45vw;
  @media screen and (max-width: 768px) {
    width: 90vw;
    min-height: 0px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

export const TopMeme = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`
export const SubmitForm = styled.form``

export const BottomMeme = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`
