import * as React from "react"

const ContentBox = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="content-box">
      <div className="container">
        <div className="row">
          <div dangerouslySetInnerHTML={{ __html: props.fields.content_box }}></div>
        </div>
      </div>
    </section>
  )
}

  export default ContentBox;
