import styled from "styled-components"

const Container = styled.div`
    height : 30px;
    background-color : #365587;
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
    font-weight : 500px;
`;

const Announcement = () => {
  return (
    <div>
        <Container>
            Welcom to websit.
        </Container>
    </div>
  )
}

export default Announcement
