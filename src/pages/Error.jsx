import React from 'react'
import error from '../img/404.jpg'

const Error = () => {
  return (
    <div>
      <img width="100%" src={error} alt="" />
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
    </div>
  )
}

export default Error