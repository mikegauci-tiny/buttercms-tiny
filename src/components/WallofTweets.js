import * as React from "react"

const WallofTweets = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="wall-of-tweets">
      <div className="container">
        <div className="row">
					<div className="wot-wrapper">
						{props.fields.tweet.map((item) => {
							return (
								<div className="wot-box">
									<div className="wot-image">
										<img src={item.image} alt="" />
									</div>
									<div className="wot-content">
										<strong>{item.full_name}</strong>
										<span>{item.username}</span>
										<div className="wysiwyg-editor" dangerouslySetInnerHTML={{ __html: item.content }}></div>
									</div>
								</div>
							)
						})}
					</div>
        </div>
      </div>
    </section>
  )
}

  export default WallofTweets;
