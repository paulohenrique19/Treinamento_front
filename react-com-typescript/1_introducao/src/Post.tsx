import React from 'react'

const Post = (props : any) => {
  return (
    <div>
        <h1>{props.author}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default Post