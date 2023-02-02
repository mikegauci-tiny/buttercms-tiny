import * as React from "react"

const Integrations = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="integrations">
      <div className="container">
        <div className="row">
          <div className="integrations-wrapper">
              {props.fields.integration_icons.map((item) => {
                return ( 
                  <a href={item.integration_link} target="_blank">
                    <img src={item.icon_dark} />
                    <img src={item.icon_color} />
                    <p>{item.integration_name}</p>
                  </a>
                )
              })}
            </div>
          <div className="integrations-content">
            <h3>{props.fields.heading}</h3>
            <p>{props.fields.subheading}</p>
            {props.fields.button.map((item) => {
              return(
                <a href={item.button_link} className={item.button_color + " " + "main-btn blue btn-hover"} target="_blank">{item.button_label}</a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

  export default Integrations;
