export const api = {
  signin: `${process.env.REACT_APP_API_URL}/auth`,
  signup: `${process.env.REACT_APP_API_URL}/users`,
  logOut: `${process.env.REACT_APP_API_URL}/auth/logout`,
  carts: `${process.env.REACT_APP_API_URL}/carts`,
  products: `${process.env.REACT_APP_API_URL}/products`,
  order: `${process.env.REACT_APP_API_URL}/order`,
};
