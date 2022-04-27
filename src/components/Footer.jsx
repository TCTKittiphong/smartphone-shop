import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display : flex;
    ${mobile({ flexDirection: "column" })}
`;


const Left = styled.div`
    flex : 1;
`;

const Logo = styled.h1`
    flex : 1;
    display : flex;
    felx-direction: column;
    padding-left : 20px;
    padding-top : 20px;
`;

const Desc = styled.p`
    padding-left : 20px;
`;

const SocialConteiner = styled.div`
    display : flex;
    margin-bottom : 20px;
    padding-left : 20px;
`;

const SocialIcon = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    color : white;
    background-color : #${props => props.color};
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`;

const Center = styled.div`
    flex : 1;
    padding : 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;
`;

const ListItem = styled.li`
    width : 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex : 1;
    padding : 20px;
    ${mobile({ blackgroudColor: "#ffff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display : flex;
    align-items : center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>SAMRTPHONE SHOP</Logo>
          <Desc>Lorem ipsum, dolor sit amet consectetur 
              adipisicing elit. Facere, doloremque aut. 
              Cupiditate ad molestiae temporibus accusamus 
              dolores cumque, nulla maxime quo incidunt esse expedita dolore totam eaque voluptatem placeat odit?
          </Desc>
          <SocialConteiner>
              <SocialIcon color="3B5999">
                  <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                  <Instagram />
              </SocialIcon>
          </SocialConteiner>
      </Left>
      <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
            </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            123-456-485648
        </ContactItem>
        <ContactItem>
            123-456-485648
        </ContactItem>
        <ContactItem>
            123-456-485648
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
