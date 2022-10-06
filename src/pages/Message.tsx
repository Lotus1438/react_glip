import React from 'react'
import Container from '../component/Container'
import Header from '../component/Header'
import LeftNav from '../component/LeftNav'
import RightNav from '../component/RightNav'

function Message() {
  return (
    <div>
      <Header/>
      <LeftNav/>
      <Container/>
      <RightNav/>
    </div>
  )
}

export default Message