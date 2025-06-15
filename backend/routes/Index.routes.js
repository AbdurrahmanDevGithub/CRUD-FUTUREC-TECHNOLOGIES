const express = require('express');
const router = express.Router();

const accountRoutes = require('./Login.routes')
const productRoutes = require('./Products.routes')


const routes = [
  {
    path:'/account',
    route:accountRoutes
  },
  {
    path:'/products',
    route:productRoutes
  }
]


routes.forEach((route)=>{
  router.use(route.path,route.route)
})


module.exports = router