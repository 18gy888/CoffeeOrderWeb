const routes = [
    //主页
    {
      path: '/',
      name: 'Home',
      meta: {layout: "userheader"},
      component: () => import(/* webpackChunkName: "index" */ '@/views/Home.vue')
    },
    //登录页
    {
      path: '/usermanager/login',
      name: 'LogIn',
      meta: {layout: "empty"},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '@/views/LogIn/LogIn.vue')
    },
    //注册页
    {
      path: '/usermanager/regist',
      name: 'Regist',
      meta: {layout: "empty"},
      component: () => import(/* webpackChunkName: "users" */ '@/views/LogIn/Regist.vue')
    },
    //菜品详细信息页
    {
      path: '/dishmanager/dishdetail',
      name: 'DishManager',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "menu" */ '@/views/DishManager/DishDetail.vue')
    },
    //菜单列表页
    {
      path: '/menumanager/menulist',
      name: 'MenuList',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "menu" */ '@/views/MenuManager/MenuList.vue')
    },
    //菜单详细页
    {
      path: '/menumanager/menudetail',
      name: 'MenuDetail',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "menu" */ '@/views/MenuManager/MenuDetail.vue')
    },
    //用户列表页
    {
      path: '/usermanager/userlist',
      name: 'UserList',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "users" */ '@/views/UserManager/UserList.vue')
    },
    //用户详细页
    {
      path: '/usermanager/userdetail',
      name: 'UserDetail',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "users" */ '@/views/UserManager/UserDetail.vue')
    },
    //前台用户订餐页面
    {
      path: '/usermenu/ordermenu',
      name: 'OrderMenu',
      meta: {layout: "userheader"},
      component: () => import(/* webpackChunkName: "order" */ '@/views/UserMenu/OrderMenu.vue')
    },
    //个人中心页面
    {
      path: '/profile/profile',
      name: 'Profile',
      meta: {layout: "empty"},
      component: () => import(/* webpackChunkName: "users" */ '@/views/Profile/Profile.vue')
    },
    //前台用户购物车页面
    {
      path: '/usermenu/shoppingcart',
      name: 'ShoppingCart',
      meta: {layout: "userheader"},
      component: () => import(/* webpackChunkName: "order" */ '@/views/UserMenu/ShoppingCart.vue')
    },
    //历史订单列表页
    {
        path: '/usermenu/orderlist',
        name: 'OrderList',
        meta: {layout: "account"},
        component: () => import(/* webpackChunkName: "order" */ '@/views/UserMenu/OrderList.vue')
    },
    //历史订单详细页
    {
        path: '/usermenu/orderlist',
        name: 'OrderDetail',
        meta: {layout: "account"},
        component: () => import(/* webpackChunkName: "order" */ '@/views/UserMenu/OrderDetail.vue')
    },
    //后台订单列表页
    {
      path: '/orderManager/orderlist',
      name: 'adminOrderList',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "order" */ '@/views/OrderManager/adminOrderList.vue')
    },
    //后台订单详细页
    {
      path: '/orderManager/orderDetail',
      name: 'adminOrderDetail',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "order" */ '@/views/OrderManager/adminOrderDetail.vue')
    },
    //后台角色管理页
    {
      path: '/userManager/roleManager',
      name: 'RoleManager',
      meta: {layout: "admin"},
      component: () => import(/* webpackChunkName: "role" */ '@/views/UserManager/RoleManager.vue')
    },
    //后台角色管理页
    {
      path: '/userManager/forgotpwd',
      name: 'ForgotPwd',
      meta: {layout: "empty"},
      component: () => import(/* webpackChunkName: "users" */ '@/views/LogIn/ForgotPwd.vue')
    }
]
export default routes;