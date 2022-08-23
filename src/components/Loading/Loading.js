import React, { useState } from 'react'
import {Container} from 'reactstrap'
import Casa from '../Casa'
import radio from './img/RL.svg'
import './Loading.css'
const Loading = (props) => {
    
    const [ loading, setLoading ] = useState(props.loading)


    function load(){
        setLoading(true)
    }

    setTimeout(load, 1000*5)

  return (
    <div>
        {!loading && 
            <Container fluid id='cc'>
                <img src={radio} alt="Loading.svg" />
                <h4 id='cctitle'>Aguarde enquanto carrego!</h4>
            </Container>
        }
        {loading && <Casa/>}
    </div>
  )
}

export default Loading