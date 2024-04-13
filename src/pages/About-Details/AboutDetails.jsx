import React from 'react'
import { useParams } from 'react-router-dom'
import { memberImages } from '../../assets/PyScript-members/memberImages'

const AboutDetails = () => {
    const { id } = useParams()
    const desiredDetail = memberImages.find(item => item.id == id)
    
  return (
    <div>
        {id ? <img src={id} alt="" /> : "Loading..."}
    </div>
  )
}

export default AboutDetails