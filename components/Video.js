import React from 'react'

export default function Video() {
  return (
    <div>
        <video>
            <source src={require("../public/video/putaclic-loop.mp4")}/>
        </video>
    </div>
  )
}
