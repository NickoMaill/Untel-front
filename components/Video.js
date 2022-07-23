import React from 'react'

export default function Video(props) {
  return (
    <div>
			<video style={{ width: "100%", height: 450, objectFit: "cover", zIndex: 0, position:"absolute" }} loop autoPlay muted>
				<source src={props.source} type="video/mp4" />
			</video>
    </div>
  )
}
