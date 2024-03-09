import { Link } from 'react-router-dom'
import { Container, InsideContainer, SideBar } from './styles'

export default function Homepage() {
  return (
    <>
      <Container>
        <SideBar>
          <h1>Sidebar</h1>
        </SideBar>
        <InsideContainer>
          <h1> Homepage </h1>
          <Link to="app">Go to app !</Link>
        </InsideContainer>
      </Container>
    </>
  )
}
