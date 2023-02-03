import * as React from "react"

const NewsletterWide = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="newsletter-wide">
      <div className="container">
        <div className="row">
          <div className="newsletter-wide-wrapper">
            <div dangerouslySetInnerHTML={{ __html: props.fields.heading }}></div>
              <form>
              <input placeholder={props.fields.email_placeholder} />
              <a href="#" className={props.fields.button_color + " " + "main-btn blue btn-hover"}>{props.fields.button_label}</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default NewsletterWide;