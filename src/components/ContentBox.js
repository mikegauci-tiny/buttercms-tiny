import * as React from "react"

const ContentBox = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="demo-editor">
      <div className="container">
        <div className="row">
          <div>{props.fields.content_box}</div>
        </div>
      </div>
    </section>
  )
}

  export default ContentBox;
