import Commerce from '@chec/commerce.js'

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true); // this is for using commerce API used for getting products,adding it to cart and all the shopping experience
