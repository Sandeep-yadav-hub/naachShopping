import _ from "lodash"

const initialState = {
  products: [],
  bestSeller: [],
  whatsNew: [],
  sales: [],
  productsList:{},
  categoryList:[]
};



export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      const payload = action.payload;
      return { ...state, products: payload };

    case "FETCH_ALL_BESTSELLER":
      var bestSeller = state.products.filter((product) => {
        if (product.ordered > 4) {
          return product;
        }
      });
      return { ...state, bestSeller: bestSeller };
    case "FETCH_ALL_WHATSNEW":
      var whatsNew = _.orderBy(state.products, (product) => new Date(product.createdAt), "desc");
      return { ...state, whatsNew: whatsNew };
    case "FETCH_ALL_SALES":
      var sales = state.products.filter((product) => {
        if (product.discount > 0) {
          return product;
        }
      });
      return { ...state, sales: sales };
    case "CREATE_PRODUCTLIST":
      var productsList = {};
      var i = state.products.length;
      while (i > 0) {
        i--;
        var sku = state.products[i].sku;
        var product = state.products[i];
        productsList[sku] = product;
      }
      return { ...state, productsList: productsList };
    case "CREATE_CATEGORYLIST":
      const products = state.products;
      const categories = [];
      for (var i = 0; i < products.length; i++) {
        const categoryObjWithImg = {
          category: products[i].category,
          img: products[i].img4,
        };
        categories.push(categoryObjWithImg);
      }
      var categoryList = _.uniqBy(categories, "category");

      return { ...state, categoryList: categoryList };
    default:
      return state;
  }
};
