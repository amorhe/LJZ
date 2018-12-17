import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/pages/my/index'
import plan from '@/pages/plan/index'
import study from '@/pages/study/index'
import zixun from '@/pages/zixun/index'
import find from '@/pages/find/index'
import dynamic from '@/pages/plan/dynamic'
import discuss from '@/pages/plan/discuss'
import invite from '@/pages/plan/invite'
import custom from '@/pages/plan/custom'
import messageIndex from '@/pages/message/index'
import messageChange from '@/pages/message/change'
import messageDiscuss from '@/pages/message/discuss'
import incite from '@/pages/message/guli'
import makePlan from '@/pages/plan/makePlan'
import planRule from '@/pages/plan/planRule'
import planDynamic from '@/pages/plan/planDynamic'
import youxuan from '@/pages/plan/youxuan'
import inviteGroup from '@/pages/plan/inviteGroup'
import punch from '@/pages/plan/punch'
import shop from '@/pages/find/shop'
import goodsDetail from '@/pages/find/goodsDetail'
import address from '@/pages/find/address'
import exchange from '@/pages/find/exchange'
import answer from '@/pages/find/answer'
import zixunDetail from '@/pages/zixun/detail'
import userInfo from '@/pages/my/userInfo'
import userIndex from '@/pages/my/userIndex'
import taskCenter from '@/pages/my/taskCenter'
import taskRecord from '@/pages/my/taskRecord'
import myPurse from '@/pages/my/myPurse'
import balance from '@/pages/my/balance'
import personPlan from '@/pages/my/plan'
import personDynamic from '@/pages/my/dynamic'
import book from '@/pages/my/book'
import friend from '@/pages/my/friend'
import search from '@/pages/my/search'
import customService from '@/pages/my/customService'
import setting from '@/pages/my/setting'
import binding from '@/pages/my/binding'
import loginWays from '@/pages/login/loginWays'
import phoneLogin from '@/pages/login/phoneLogin'
import inviteFriend from '@/pages/invite/inviteFriend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: plan,
      meta: { navShow: true, cname: '底部bannar',index:1}
    },
    {
      path: '/study', //学习
      component: study,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/zixun',  //资讯
      component: zixun,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/find', //发现
      component: find,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/my',  //我的
      component: myIndex,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path:'/dynamic', //动态
      component:dynamic,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path:'/discuss', //评论
      component:discuss,
      meta:{index:2}
    },
    {
      path: '/invite', //邀请
      component: invite,
      meta: { navShow: true, cname: '底部bannar',index:1 }
    },
    {
      path: '/custom',//自定义计划
      component:custom,
      meta:{index:2}
    },
    {
      path: '/message', //消息中心
      component: messageIndex,
      meta:{index:2}
    },
    {
      path:'/messageChange', //变动提醒
      component:messageChange,
      meta:{index:3}
    },
    {
      path:'/messageDiscuss', //评论你
      component:messageDiscuss,
      meta:{index:4}
    },
    {
      path:'/incite',  //鼓励你
      component:incite,
      meta:{index:4}
    },
    {
      path:'/makePlan',  //制定计划
      component:makePlan,
      children:[
        {
          path:'planRule',
          component:planRule,
          meta:{index:3}
        },
        {
          path:'planDynamic',
          component:planDynamic,
          meta:{index:3}
        },
        {
          path:'youxuan',
          component:youxuan,
          meta:{index:3}
        }
      ]
    },
    {
      path:'/inviteGroup',  //邀请组队
      component:inviteGroup,
      meta:{index:4}
    },
    {
      path:'/punch',
      component: punch,
      meta:{index:4}
    },
    {
      path:'/shop',
      component: shop,
      meta:{index:2}
    },
    {
      path:'/goodsDetail',
      component:goodsDetail,
      meta:{index:3}
    },
    {
      path:'/address',
      component:address,
      meta:{index:4}
    },
    {
      path:'/exchange',
      component:exchange,
      meta:{index:3}
    },
    {
      path:'/answer',
      component:answer,
      meta:{index:2}
    },
    {
      path:'/zixunDetail',
      component:zixunDetail,
      meta:{index:3}
    },
    {
      path:'/userInfo',
      component:userInfo,
      meta:{index:2}
    },
    {
      path:'/userIndex',
      component:userIndex,
      children: [
        {
          path:'personPlan',
          component:personPlan,
          meta:{index:3}
        },
        {
          path:'personDynamic',
          component:personDynamic,
          meta:{index:3}
        },
        {
          path:'book',
          component:book,
          meta:{index:3}
        }
      ]
    },
    {
      path:'/taskCenter',
      component:taskCenter,
      meta:{index:2}
    },
    {
      path:'/taskRecord',
      component:taskRecord,
      meta:{index:3}
    },
    {
      path:'/myPurse',
      component:myPurse,
      meta:{index:2}
    },
    {
      path:'/balance',
      component:balance,
      meta:{index:3}
    },
    {
      path:'/friend',
      component:friend,
      meta:{index:3}
    },
    {
      path:'/search',
      component:search,
      meta:{index:4}
    },
    {
      path:'/customService',
      component:customService,
      meta:{index:2}
    },
    {
      path:'/setting',
      component:setting,
      meta:{index:2}
    },
    {
      path:'/binding',
      component:binding,
      meta:{index:3}
    },
    {
      path:'/loginWays',
      component:loginWays,
      meta:{index:-3}
    },
    {
      path:'/phoneLogin',
      component:phoneLogin,
      meta:{index:-2}
    },
    {
      path:'/inviteFriend',
      component:inviteFriend,
      meta:{index:2}
    }
  ],
  //跳转页面scrolltop为0
  scrollBehavior
    (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // mode: "history"
})
