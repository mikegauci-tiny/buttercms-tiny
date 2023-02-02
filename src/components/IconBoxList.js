import * as React from "react"

const IconBoxList = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="icon-box-list">
      <div className="container">
        <div className="row">
					{props.fields.icon_box_list.map((item) => {
						return (	
						<div className="icon-box-wrapper-list">
							<img src={item.icon} alt="" />
							<h4>{item.heading}</h4>
							<ul>
								<li>{item.item_one}</li>
								<li>{item.item_two}</li>
								<li>{item.item_three}</li>
							</ul>
						</div>
						)
					})}
        </div>
      </div>
    </section>
  )
}

  export default IconBoxList;
