import * as React from "react"

const IconBox = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="icon-box">
      <div className="container">
        <div className="row">
					{props.fields.icon_box.map((item) => {
						return (	
						<div className="icon-box-wrapper">
							<img src={item.icon} alt="" />
							<h4>{item.heading}</h4>
							<p>{item.description}</p>
						</div>
						)
					})}
        </div>
      </div>
    </section>
  )
}

  export default IconBox;
