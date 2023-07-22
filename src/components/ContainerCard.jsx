import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {data} from "../helpers/data"
import PlayerCard from './PlayerCard';
const ContainerCard = () => {

const [search , setSearch ] = useState("")

const handleChange = (e) =>{

setSearch(e.target.value)
}

const filtereData = data.filter(item => item.name.toLocaleLowerCase().includes(search.trim().toLowerCase()))

  return (
    <>
    <Form.Control type="search"  placeholder="Search Player..." onChange={handleChange}/>

    <Container className='p-3 rounded-4 card-container my-3'>
      <Row xs={1} sm={2} md={3} lg={4}  className='justify-content-center g-3 '>
       
        {filtereData.map((player,i)=><PlayerCard key={i} {...player}/>)}
      </Row>
    </Container>
   </>
  )
}

export default ContainerCard