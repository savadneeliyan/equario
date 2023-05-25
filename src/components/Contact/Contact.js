import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import ButtonContainer from '../common/button/ButtonContainer'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const [success, setsuccess] = useState(null)

    const handleEmail = async (e)=>{
        e.preventDefault();
  
        emailjs.sendForm('service_eeajigq', 'template_n3r56rb', form.current, 'dhWq6M73klRpSL5RC')
            .then((result) => {
              console.log(result.text);
              setsuccess(true)
            }, (error) => {
              console.log(error.text);
              setsuccess(false)
            });
    }
  return (

    <Section  data-aos="fade-up">
        <Wrapper>
            <Title>Get in Touch</Title>
            <WrapperContainer>
                <FormContainer ref={form}   onSubmit={handleEmail}>
                    <InputContainer>
                        <Input type="text" placeholder='First Name*' name='firstname' />
                        <Input type="text"  placeholder='Surname*' name='lastname'/>
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" placeholder='E-mail*' name='email' />
                        <Input type="text"  placeholder='Phone*' name='phone' />
                    </InputContainer>
                    <Textarea type="textarea" placeholder='Message*' name='message' />
                    <ButtonS type='submit'>
                        Submit
                        <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M2 21L21 2"
                            stroke="white"
                            stroke-width="2.63994"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M2 2H21V21"
                            stroke="white"
                            stroke-width="2.63994"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        </svg>
                    </ButtonS>
                </FormContainer>
                <ButtomContainer>
                    <ButtonContainer title="+44 (0) 7920085439" link="tel:+44 (0) 7920085439"/>
                    <ButtonContainer title="faried@equarius8.com" link="mailto:faried@equarius8.com"/>
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
    @media (max-width: 1600px) {
        padding: 0 15px;
    }
    @media (max-width: 992px) {
        background: linear-gradient(to top, #FF8F07 36.8%, #fff 36.8%);
        padding-top: 80px;
        padding-bottom: 80px;
    }
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
    gap: 160px;
    @media (max-width: 1200px) {
        gap: 50px;
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
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
const ButtonS = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 10px;
  border: 4px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding:20px 30px;
  text-decoration: none;
  cursor: pointer;
`;