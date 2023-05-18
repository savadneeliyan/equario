import React from 'react'
import styled from 'styled-components'
import Button from '../common/button/Button'
import ButtonContainer from '../common/button/ButtonContainer'

function Contact() {
  return (

    <Section>
        <Wrapper>
            <Title>Get in Touch</Title>
            <WrapperContainer>
                <FormContainer action="">
                    <InputContainer>
                        <Input type="text" placeholder='First Name*' />
                        <Input type="text"  placeholder='Surname*' />
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" placeholder='E-mail*'  />
                        <Input type="text"  placeholder='Phone*' />
                    </InputContainer>
                    <Textarea type="textarea" placeholder='Message*'  />
                    <Button/>
                </FormContainer>
                <ButtomContainer>
                    <ButtonContainer title="+44 (0) 7920085439"/>
                    <ButtonContainer title="faried@equarius8.com"/>
                    <ButtonContainer title="Lorem Ipsum is simply dummy text of the"/>
                </ButtomContainer>
            </WrapperContainer>
        </Wrapper>
    </Section>
    
  )
}

export default Contact

const Section = styled.div`
    background: linear-gradient(to left, #FF8F07 36.8%, #fff 36.8%);
    padding: 140px 0;
`
const Wrapper = styled.div`
    max-width: 1580px;
    margin: auto;
`
const Title = styled.div`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 65px;
    line-height: 94px;
    color: #1E3B97;
    margin-bottom: 30px;
`

const FormContainer = styled.form`
    max-width: 942px;
    width: 100%;
`
const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

`
const WrapperContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    gap: 30px;
`
const Input = styled.input`
    outline: 0;
    border: 0;
    color: #1E3B97;
    border-bottom: 3px solid #1C1616;
    margin-bottom: 30px;
    width: 100%;
    height: 50px;
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
`

const Textarea = styled(Input)`
    height: 150px;
    margin-bottom: 80px;
`

const ButtomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:30px;
`
