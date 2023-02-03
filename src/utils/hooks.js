import { useEffect, useState } from "react"
import { butterCMS } from "./buttercmssdk";

// load menu items data
export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const menuItems = await butterCMS.content.retrieve(["navigation_menu"]);
      setMenuItems(menuItems.data.data.navigation_menu[0].menu_items)
    }

    loadData()
  }, []);

  return menuItems
}

// load menu items data in footer products
export const useFooterProductItems = () => {
  const [footerProductMenuItems, setFooterProductMenuItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const footerProductMenuItems = await butterCMS.content.retrieve(["footer_products_menu"]);
      setFooterProductMenuItems(footerProductMenuItems.data.data.footer_products_menu[0].menu_items)
    }

    loadData()
  }, []);

  return footerProductMenuItems
}

// load menu items data in footer pricing
export const useFooterPricingItems = () => {
  const [footerPricingMenuItems, setFooterPricingMenuItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const footerPricingMenuItems = await butterCMS.content.retrieve(["footer_pricing_menu"]);
      setFooterPricingMenuItems(footerPricingMenuItems.data.data.footer_pricing_menu[0].menu_items)
    }

    loadData()
  }, []);

  return footerPricingMenuItems
}

// load menu items data in footer developer
export const useFooterDeveloperItems = () => {
  const [footerDeveloperMenuItems, setFooterDeveloperMenuItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const footerDeveloperMenuItems = await butterCMS.content.retrieve(["footer_developer_menu"]);
      setFooterDeveloperMenuItems(footerDeveloperMenuItems.data.data.footer_developer_menu[0].menu_items)
    }

    loadData()
  }, []);

  return footerDeveloperMenuItems
}

// load menu items data in footer company
export const useFooterCompanyItems = () => {
  const [footerCompanyMenuItems, setFooterCompanyMenuItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const footerCompanyMenuItems = await butterCMS.content.retrieve(["footer_company_menu"]);
      setFooterCompanyMenuItems(footerCompanyMenuItems.data.data.footer_company_menu[0].menu_items)
    }

    loadData()
  }, []);

  return footerCompanyMenuItems
}

// load menu items data in social media
export const useSocialMediaItems = () => {
  const [socialMediaIconItems, setSocialMediaIconItems] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const socialMediaIconItems = await butterCMS.content.retrieve(["social_media"]);
      setSocialMediaIconItems(socialMediaIconItems.data.data.social_media[0].social_media_items)
    }

    loadData()
  }, []);

  return socialMediaIconItems
}

// load categories
export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => { 
      const categories = await butterCMS.category.list()
      setCategories(categories.data.data)
    }

    loadData()
  }, []);

  return categories
}
