import {Component} from 'react'
import {
  Heading,
  MainContainer,
  FormContainer,
  Label,
  Input,
  InputElementContainer,
  SelectElement,
  OptionElement,
  CustomButton,
  ImageViewContainer,
  ImageContainer,
  TopMeme,
  SubmitForm,
  BottomMeme,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    selectedOption: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedOptionOutput: '',
  }

  onChangeImageInput = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    // console.log(event.target.value)
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionInput = event => {
    console.log(event.target.value)
    this.setState({selectedOption: event.target.value})
  }

  renderImageView = () => {
    const {imageUrl, topText, bottomText, selectedOptionOutput} = this.state

    return (
      <ImageViewContainer imgUrl={imageUrl} data-testid="meme">
        <TopMeme fontSize={selectedOptionOutput}>{topText}</TopMeme>
        <BottomMeme fontSize={selectedOptionOutput}>{bottomText}</BottomMeme>
      </ImageViewContainer>
    )
  }

  onSubmitForm = event => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      selectedOption,
    } = this.state
    event.preventDefault()
    console.log('submitted')
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedOptionOutput: selectedOption,
    })
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      selectedOption,
    } = this.state
    return (
      <>
        <Heading>Meme Generator</Heading>
        <SubmitForm onSubmit={this.onSubmitForm}>
          <InputElementContainer>
            <Label htmlFor="image-url" value={imageUrlInput}>
              image URL
            </Label>
            <Input
              id="image-url"
              type="text"
              onChange={this.onChangeImageInput}
              placeholder="Enter the image URL"
            />
          </InputElementContainer>
          <InputElementContainer>
            <Label htmlFor="top-text" value={topTextInput}>
              Top Text
            </Label>
            <Input
              id="top-text"
              type="text"
              onChange={this.onChangeTopTextInput}
              placeholder="Enter the Top Text"
            />
          </InputElementContainer>
          <InputElementContainer>
            <Label htmlFor="bottom-text" value={bottomTextInput}>
              Bottom Text
            </Label>
            <Input
              id="bottom-text"
              type="text"
              onChange={this.onChangeBottomTextInput}
              placeholder="Enter the Bottom Text"
            />
          </InputElementContainer>
          <InputElementContainer>
            <Label htmlFor="font-size" value={selectedOption}>
              Font Size
            </Label>
            <SelectElement onChange={this.onChangeOptionInput} id="font-size">
              {fontSizesOptionsList.map(eachOption => (
                <OptionElement key={eachOption.optionId}>
                  {eachOption.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </InputElementContainer>
          <CustomButton type="submit">Generate</CustomButton>
        </SubmitForm>
      </>
    )
  }

  render() {
    return (
      <MainContainer>
        <FormContainer>{this.renderFormContainer()}</FormContainer>
        <ImageContainer>{this.renderImageView()}</ImageContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
