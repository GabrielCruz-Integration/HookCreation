import { Link } from 'react-router-dom'
import { Container, InsideContainer, SideBar } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../../Interfaces/Post'
import { API_URL } from '../../../configs'
import { createPortal } from 'react-dom'
import { Dialog } from '@mui/material'

export default function Homepage() {
  axios.defaults.baseURL = API_URL

  const fetchData = () => {
    axios
      .get<Post[]>('/posts')
      .then((response) => {
        console.log(response.data)
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [portalOpened, setPortalOpened] = useState(false)

  return (
    <>
      <Container>
        <SideBar>
          <h1>Sidebar</h1>
          <button onClick={() => setPortalOpened(true)}>Open Portal</button>
        </SideBar>
        <InsideContainer>
          <h1> Homepage </h1>
          <Link to="app">Go to app !</Link>
        </InsideContainer>
      </Container>

      {
        <Dialog
          maxWidth="md"
          fullWidth
          open={portalOpened}
          onClose={() => setPortalOpened(false)}
        >
          <h1>Dialog</h1>
        </Dialog>
      }
    </>
  )
}
