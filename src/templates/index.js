import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Layout from "../containers/Layout"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import CustomerLogos from "../components/CustomerLogos"
import DemoEditor from "../components/DemoEditor"
import ContentBox from "../components/ContentBox"
import Integrations from "../components/Integrations"
import TwoColumnsImageBanner from "../components/TwoColumnsImageBanner"
import IconBox from "../components/IconBox"
import WallofTweets from "../components/WallofTweets"
import IconBoxList from "../components/IconBoxList"
import Buttons from "../components/Buttons"
import NewsletterWide from "../components/NewsletterWide"
import TestimonialsSection from "../components/TestimonialsSection"
import TwoColumnWithImageSection from "../components/TwoColumnWithImageSection"
import NotFoundSection from "../components/NotFoundSection"
import SEO from "../components/SEO";
import Spinner from "../components/Spinner";
import { butterCMS } from "../utils/buttercmssdk";
import { useMenuItems } from "../utils/hooks";
import {
  useFooterProductItems,
  useFooterPricingItems,
  useFooterDeveloperItems,
  useFooterCompanyItems,
  useSocialMediaItems,
} from "../utils/hooks";

const IndexPage = () => {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const { slug } = useParams();

  let menuItems = useMenuItems();
  let footerProductMenuItems = useFooterProductItems();
  let footerPricingMenuItems = useFooterPricingItems();
  let footerDeveloperMenuItems = useFooterDeveloperItems();
  let footerCompanyMenuItems = useFooterCompanyItems();
  let socialMediaIconItems = useSocialMediaItems();

  useEffect(() => {
    const loadData = async () => {
      try {
        const page = await butterCMS.page.retrieve("landing-page", slug || "landing-page-with-components")
        setPage(page.data.data)
      } catch (error) {
        setError(true)
      }

      // Returns a list of published posts. The posts are returned sorted by publish date, with the most recent posts appearing first.
      const posts = await butterCMS.post.list({ page: 1, page_size: 2 })
      setBlogPosts(posts.data.data)
      setLoader(false);
    }

    loadData()
  }, []);

  if (error) return (<NotFoundSection />)
  if (loader) return (<Spinner />)

  return (
    <Layout
      menuItems={menuItems}
      footerProductMenuItems={footerProductMenuItems}
      footerPricingMenuItems={footerPricingMenuItems}
      footerDeveloperMenuItems={footerDeveloperMenuItems}
      footerCompanyMenuItems={footerCompanyMenuItems}
      socialMediaIconItems={socialMediaIconItems}
    >
      <SEO {...page.fields.seo} />

      {page.fields.body.map((bodyElement, i) => {
        switch (bodyElement.type) {
          case "hero":
            return <HeroSection fields={bodyElement.fields} key={i} />
          case "customer_logos":
            return <CustomerLogos fields={bodyElement.fields} key={i} />
          case "demo_editor":
            return <DemoEditor fields={bodyElement.fields} key={i} />                  
          case "content_box":
            return <ContentBox fields={bodyElement.fields} key={i} />   
          case "integrations":
            return <Integrations fields={bodyElement.fields} key={i} />                              
          case "two_column_image_banner":
            return <TwoColumnsImageBanner fields={bodyElement.fields} key={i} />                              
          case "icon_box":
            return <IconBox fields={bodyElement.fields} key={i} />
          case "wall_of_tweets":
            return <WallofTweets fields={bodyElement.fields} key={i} />
          case "icon_box_list":
            return <IconBoxList fields={bodyElement.fields} key={i} />            
          case "buttons":
            return <Buttons fields={bodyElement.fields} key={i} />            
          case "newsletter_wide":
            return <NewsletterWide fields={bodyElement.fields} key={i} />            
          default:
            return null
        }
      })}
    </Layout>
  )
}

export default IndexPage
