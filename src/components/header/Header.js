import React,{useState,useEffect} from 'react'
import {
  HeaderContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  HeaderRight,
  DropDown,
  DropDownNavLink,
} from "./styled";
import logo from "../../assests/brand logo/logo.png"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchProducts,
  fetchNewProducts,
  fetchBestSeller,
  fetchSales,
  createProductsList,
  createCategoryList,
} from "../../redux/actions/products";
import { fetchTestinomial } from "../../redux/actions/testinomial";


import MenuIcon from "@material-ui/icons/Menu";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import {fetchCollections} from "../../redux/actions/collection"

function Header() {
    const history = useHistory();
    const dispatch = useDispatch()
    
    const collections = useSelector(state => state.collections)
    const products = useSelector((state) => state.products);

    const [openShopDropDown, setOpenShopDropDown] = useState(false);
    const [openCollectionDropDown, setOpenCollectionDropDown] = useState(false);
    const [openCategoryDropDown, setOpenCategoryDropDown] = useState(false);
    const [click, setClick] = useState(false);
    const [resized, setResized] = useState(false);

    const handelClick = () => setClick(!click);

    const getCollection = async() => {
        await dispatch(fetchCollections());
    };

    function onMouseEnterShop() {
        setOpenShopDropDown(true);
    }
    function onMouseLeaveShop() {
        setOpenShopDropDown(false);
    }
    function onMouseEnterCollection() {
        setOpenCollectionDropDown(true);
    }
    function onMouseLeaveCollection() {
        setOpenCollectionDropDown(false);
    }
    function onMouseEnterCategory() {
        setOpenCategoryDropDown(true);
    }
    function onMouseLeaveCategory() {
        setOpenCategoryDropDown(false);
    }

    function handelHeader(location) {
      history.push(location);
    }
    function handelCollectionProduct({ e, id }) {
      e.preventDefault();
      history.push(`/home/shop/collections/${id}`);
    }

    function screenWidth(){
        if(window.screen.width>959){
            return setResized(true)
        }
        return setResized(false);
    }
    
    useEffect(() => {
      screenWidth();
      window.addEventListener("resize", screenWidth);
    }, [])

    useEffect(() => {
      getCollection();
    }, []);
    
    const handelProducts = async () => {
      await dispatch(fetchProducts());
      await dispatch(fetchNewProducts());
      await dispatch(fetchBestSeller());
      await dispatch(createProductsList());
      await dispatch(fetchTestinomial());
      await dispatch(createCategoryList());
      await dispatch(fetchSales());
    };

    useEffect(() => {
      handelProducts();
    }, []);
    

    return (
      <HeaderContainer>
        <div className="header">
          <img
            onClick={() => handelHeader("/home")}
            src={logo}
            alt="How to do Logo"
          />
          <HeaderRight>
            <ShoppingCartOutlinedIcon className="cart" />
            <MobileIcon onClick={handelClick}>
              {click ? (
                <CloseOutlinedIcon />
              ) : (
                <>
                  <MenuIcon />
                </>
              )}
            </MobileIcon>
          </HeaderRight>
        </div>
        <NavMenu onClick={handelClick} click={click}>
          <NavItem className="spacing">
            <NavLinks to=""></NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/home">Home</NavLinks>
          </NavItem>
          {resized ? (
            <NavItem
              onMouseOver={onMouseEnterShop}
              onMouseLeave={onMouseLeaveShop}
            >
              <NavLinks to="/home/shop">
                Shop <ArrowDropDownOutlinedIcon />
              </NavLinks>
              <DropDown style={{ display: openShopDropDown ? "flex" : "none" }}>
                <NavItem>
                  <NavLinks
                    to="/home/shop/category"
                    onMouseOver={onMouseEnterCategory}
                    onMouseLeave={onMouseLeaveCategory}
                  >
                    Category
                    <ArrowDropDownOutlinedIcon
                      style={{
                        transform: "rotate(270deg)",
                        marginLeft: "auto",
                      }}
                    />
                    <DropDownNavLink
                      style={{
                        display: openCategoryDropDown ? "flex" : "none",
                      }}
                    >
                      {products?.categoryList?.map((category, index) => {
                        return (
                          <NavItem key={index}>
                            <NavLinks
                              to={`/home/shop/category/${category.category}`}
                            >
                              {/* <img src={category.img} widht="30px" height="30px" style={{borderRadius:"5px"}} /> */}
                              {category.category}
                            </NavLinks>
                          </NavItem>
                        );
                      })}
                    </DropDownNavLink>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="/home/shop/collections"
                    onMouseOver={onMouseEnterCollection}
                    onMouseLeave={onMouseLeaveCollection}
                  >
                    Collection{" "}
                    <ArrowDropDownOutlinedIcon
                      style={{
                        transform: "rotate(270deg)",
                        marginLeft: "auto",
                      }}
                    />
                    <DropDownNavLink
                      style={{
                        display: openCollectionDropDown ? "flex" : "none",
                      }}
                    >
                      {collections.map((collection) => {
                        return (
                          <NavItem key={collection.collectionCode}>
                            <NavLinks
                              onClick={(e) =>
                                handelCollectionProduct({
                                  e,
                                  id: collection._id,
                                })
                              }
                            >
                              {collection.collectionName}
                            </NavLinks>
                          </NavItem>
                        );
                      })}
                    </DropDownNavLink>
                  </NavLinks>
                </NavItem>
                {products?.whatsNew?.length > 0 && (
                  <NavItem>
                    <NavLinks to="/home/shop/products/whatsnew">What's New</NavLinks>
                  </NavItem>
                )}
                {products?.bestSeller?.length > 0 && (
                  <NavItem>
                    <NavLinks to="/home/shop/products/bestseller">Best Seller</NavLinks>
                  </NavItem>
                )}
                {products?.sale?.length > 0 && (
                  <NavItem>
                    <NavLinks to="/home/shop/products/sale">Sale</NavLinks>
                  </NavItem>
                )}
              </DropDown>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLinks to="/home/shop">Shop</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/home/shop/category">Category</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/home/shop/collections">Collection</NavLinks>
              </NavItem>
              {products?.bestSeller?.length > 0 && (
                <NavItem>
                  <NavLinks to="/home/shop/bestseller">Best Seller</NavLinks>
                </NavItem>
              )}
              {products?.sale?.length > 0 && (
                <NavItem>
                  <NavLinks to="/home/shop/sale">Sale</NavLinks>
                </NavItem>
              )}
            </>
          )}

          <NavItem>
            <NavLinks to="/home/blogs">Blogs</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Contact Us</NavLinks>
          </NavItem>
          <NavItem className="spacing">
            <NavLinks to=""></NavLinks>
          </NavItem>
        </NavMenu>
      </HeaderContainer>
    );
}

export default Header
