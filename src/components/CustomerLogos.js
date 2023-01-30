import * as React from "react"

const CustomerLogos = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="customer-logos">
      <div className="container">
        <div className="row">
          <ul>
            {props.fields.logo.map((item) => {
              return ( <li><img src={item.image} /></li> )
            })}
          </ul>
          <p className="text-center">{props.fields.subheading}</p>
        </div>
      </div>
    </section>
  )
}

  export default CustomerLogos;
