import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
      <Content>
        <Cta>
          <CtaLogoOne src="/images/cta-logo-one.svg" alt='loremipsum'/>
          <SignUp>GET ALL THERE</SignUp>
        </Cta>
       <BgImage/>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  `;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%
`

const BgImage = styled.div`
background-image: url("images/login-background.jpg");
background-position: top;
background-repeat: no-repeat;
background-size: cover;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1;
height: 100%;
`

const Cta = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const CtaLogoOne = styled.img`
  margin-bottom: 20px;
  max-width: 60 0px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100% !important;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  font-size: 18px;
  padding: 12.5px 0 ;
  border: 1px solid #0063e5;
  border-radius: 4px;
  &:hover{
  background-color: #0483ee;
}
`


export default Login