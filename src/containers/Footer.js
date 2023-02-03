import React from "react"

const Footer = ({
  footerProductMenuItems,
  footerPricingMenuItems,
  footerDeveloperMenuItems,
  footerCompanyMenuItems,
  socialMediaIconItems,
  }) => {
  return (
    <footer className="footer pt-120">
      <div className="container">
        <div className="row">

          <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12">
            <div className="footer-widget">
              <div className="logo">
                <a href="https://buttercms.com">
                  <img width="98" src="https://cdn.buttercms.com/ulrS7o6GRHmOs9R21bQp" alt="logo" loading="lazy" />
                </a>
              </div>
              <h4>Stay Connected</h4>
              <ul className="social-links">
                {socialMediaIconItems.map(item =>
                  <li key={item.name}>
                    <a className="yoyo" href={item.link}>
                      <img src={item.icon}/>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          
          <div className="col-xl-2 col-lg-2 col-md-2 col-xs-12 offset-md-2">
            <div className="footer-widget">
              <h4>Products</h4>
              <ul className="links">
                {footerProductMenuItems.map(menu =>
                  <li key={menu.label}><a className="yoyo" href={menu.url}>{menu.label}</a></li>
                )}
              </ul>

              <h4>Pricing</h4>
              <ul className="links">
                {footerPricingMenuItems.map(menu =>
                  <li key={menu.label}><a className="yoyo" href={menu.url}>{menu.label}</a></li>
                )}                               
              </ul>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2 col-xs-12">
            <div className="footer-widget">
              <h4>Developers</h4>
              <ul className="links">
                {footerDeveloperMenuItems.map(menu =>
                  <li key={menu.label}><a className="yoyo" href={menu.url}>{menu.label}</a></li>
                )}                            
              </ul>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2 col-xs-12">
            <div className="footer-widget">
              <h4>Company</h4>
              <ul className="links">
                {footerCompanyMenuItems.map(menu =>
                  <li key={menu.label}><a className="yoyo" href={menu.url}>{menu.label}</a></li>
                )}                                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
