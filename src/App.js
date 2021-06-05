import React from "react"
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"; 
import BlogsPage from "./pages/blogs/Blogs" 
import HomePage from "./pages/home/Home"; 
import ShopPage from "./pages/shop/Shop"; 
import CollectionPage from "./pages/collection/Collection"; 
import CollectionProductPage from "./pages/collectionProduct/CollectionProduct"; 
import ProductPage from "./pages/product/Product"; 
import CategoryPage from "./pages/category/Category"; 
import CategoryProductPage from "./pages/categoryProduct/CategoryProduct"; 
import BestSellerPage from "./pages/bestSeller/BestSeller"; 
import SalesPage from "./pages/sales/Sales"; 
import WhatsNew from "./pages/whatsNew/WhatsNew"; 
import RegistrationPage from "./pages/registration/Registration"; 
import AuthPage from "./pages/auth/Auth"; 




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/home/shop" exact component={ShopPage} />
        <Route path="/home/blogs" exact component={BlogsPage} />
        <Route path="/home/shop/products/bestseller" exact component={BestSellerPage} />
        <Route path="/home/shop/products/sale" exact component={SalesPage} />
        <Route path="/home/shop/products/whatsnew" exact component={WhatsNew} />
        <Route path="/home/shop/collections" exact component={CollectionPage} />
        <Route path="/home/shop/collections/:id" exact component={CollectionProductPage} />
        <Route path="/home/shop/products/:id" exact component={ProductPage} />
        <Route path="/home/shop/category" exact component={CategoryPage} />
        <Route path="/home/shop/category/:category" exact component={CategoryProductPage} />
        <Route path="/home/shop/signUp" exact component={RegistrationPage} />
        <Route path="/home/shop/signIn" exact component={AuthPage} />
        {/* <Route
          path="/account"
          exact
          render={() => {
            if (user.isLoggedIn === "true" || user.isLoggedIn === true) {
              return <ManageAccount />;
            } else {
              return <Redirect push to="/" />;
            }
          }}
        /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
