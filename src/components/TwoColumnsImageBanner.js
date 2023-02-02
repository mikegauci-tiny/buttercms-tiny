import * as React from "react"

const TwoColumnsImageBanner = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="two-columns-image-banner">
      <div className="container">
        <div className="row">
					{props.fields.banners.map((item) => {
						return (
							<div className="tcib-wrapper">
							<div className="tcib-content">
									<h4>{item.heading}</h4>
									<p>{item.description}</p>
							</div>
							<div className="tcib-image">
									<img src={item.image} alt=""></img>
							</div>
						</div>						
						)
					})}
        </div>
      </div>
    </section>
  )
}

  export default TwoColumnsImageBanner;
