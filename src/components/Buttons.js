import * as React from "react"

const Integrations = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} style={{textAlign: "center"}}>
      <div className="container">
        <div className="row">
          <div className="buttons-container">
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
