import React from 'react'
import styled from 'styled-components'

function ListSection() {
  return (
    <Section>
        <Wrapper>
            
            <div>
                <Description>Our mission is to assist Rising Stars/Leaders and professionals from the LGBTQ+ and BAME communities and allies in recognising and harnessing their unique gifts, gaining clarity to focus on what matters most, and achieving success on your terms.</Description>

                <Description>We aim to help empower individuals to liberate themselves from limiting beliefs and paradigms that no longer serve them and to live authentically and embrace their true selves.</Description>

                <Description>Our coaching approach is here to help you triumph and focus on what truly matters, unleash your inner superhero, and unlock your leadership potential.</Description>
                    <ListContainer>
                        <List>Activate Your Superpowers</List>
                        <List>Liberate yourself from Limiting Beliefs</List>
                        <List>Live your Authentic Life</List>
                        <List>Amplify the Power of the Group</List>
                        <ListMargin>Live your Authentic Life</ListMargin>
                        <ListMargin>Amplify the Power of the Group</ListMargin>
                    </ListContainer>
            </div>
        </Wrapper>
    </Section>
  )
}

export default ListSection

const Section = styled.div`
    background: linear-gradient(to left, #FFD300 84.95%, #E20001 84.95%);
    height: 937px;
    display: flex;
    justify-content: center;
    padding-top: 190px;
`
const Wrapper = styled.div`
    max-width: 1250px;
    width: 100%;
    margin-left: 150px;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 22.7962px;
    line-height: 35px;
    color: #272101;
    /* max-width: 529px; */
    margin-top: 21px;
    margin-bottom: 21px;
`
const ListContainer = styled.ul`
    margin-bottom: 50px;
    padding-left: 25px;
    margin-top: 50px;
`
const List = styled.li`
    color: #272101;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    padding-left: 20px;
    font-size: 21.5297px;
    line-height: 35px;
    margin: 15px 0;
    list-style-image: url(/assets/Icons/List.svg);
`
const ListMargin = styled(List)`
    margin-left: 80px;
`
