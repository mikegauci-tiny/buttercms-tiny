import * as React from "react"

const DemoEditor = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="demo-editor">
      <div className="container">
        <div className="row">
          <p className="text-center">{props.fields.editor}</p>
        </div>
      </div>
    </section>
  )
}

  export default DemoEditor;
