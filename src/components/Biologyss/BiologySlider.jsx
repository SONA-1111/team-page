import React from 'react'
import styled from 'styled-components'

const BiologySlider = (props) => {
    const {name, position, img_url} = props.item;
  return (
    <>
   
    <Container>
         
        <Card>
            <img src={img_url} alt={name} />
            <div className="details">
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
        </Card>
    </Container>
    </>
  )
}

export default BiologySlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`
const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h2{
        font-size: .9rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.8rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`