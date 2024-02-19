import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import CompteurPage from '../views/CompteurPage.vue'
import AboutView from '../views/AboutView.vue'
import sitemap from '../data/routesList.json'

/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/compteur',
      name: 'compteur',
      component: CompteurPage
    }
  ]
})

export default router

*/


// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
      path: '/', 
      name: 'home',
      component: HomeView,
      //redirect: '/homeview'
  },
  {
    path: '/about', 
    name: 'about',
    component: AboutView
}
]

/* SCRIPT  */
sitemap.forEach(el => {
  let newRoute = setRoute(el)
  routes.push(newRoute)
});

// Cette fonction permet de s'assurer que le chemin d'import pour le composant
// commemence par un '/'
function sanitizeRoutePath(path) {
  return path[0] != '/' ?  path = '/' + path : path
}  
function setRoute(el, level = null) {
  let newRoute = {
      path: sanitizeRoutePath(el.path),
      component: () => import(/* @vite-ignore */ `../views/${el.component}`),
      name: el.name,
      props: { name: el.name, uuid: el.uuid },
      meta: el.meta ? el.meta : null,
      params: el.params ? el.params : null,
      query: el.query ? el.query : null,
      hash: el.hash ? el.hash : null,
      sensitive: el.sensitive ? el.sensitive : false,
      strict: el.strict ? el.strict : false,
      alias: el.alias ? el.alias : [],
      redirect: el.redirect ? el.redirect : null
    }
  if (level == null) {
      newRoute.children = el.children ? getChildrenData(el.children) : null
  }
  return newRoute
}
function getChildrenData(children) {
  const childrensArray = []
  children.forEach(el=> {
      let childRoute = setRoute(el, "children")
      childrensArray.push(childRoute)
  })
  return childrensArray
}

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // Provide the history implementation to use.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router