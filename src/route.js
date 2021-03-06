import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role', component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit', component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu', component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/menu', component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit', component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user', component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role', component: asyncComponent(() => import('container/security/user/assign'))
  },
  {
    path: '/system/user/pwd_reset', component: asyncComponent(() => import('container/security/user/pwdReset'))
  },
  //  系统参数
  {
    path: '/system/sysPara', component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict', component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit', component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit', component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  // 系统管理 -- 消息推送 -- 公告管理
  {
    path: '/public/notice', component: asyncComponent(() => import('container/public/notice/notice'))
  },
  // 系统管理 -- 消息推送 -- 公告管理 -- 详情
  {
    path: '/public/notice/addedit', component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
  },
  // 系统管理 -- 文章管理 -- 注册协议
  {
    path: '/public/registrationAgreement', component: asyncComponent(() => import('container/public/registrationAgreement/registrationAgreement'))
  },
  // 系统管理 -- 文章管理 -- 攻略
  {
    path: '/public/strategy', component: asyncComponent(() => import('container/public/strategy/strategy'))
  },
  // 系统管理 -- 广告位管理 -- banner管理
  {
    path: '/public/banner', component: asyncComponent(() => import('container/public/banner/banner'))
  },
  // 系统管理 -- 广告位管理 -- banner管理 -- 详情
  {
    path: '/public/banner/addedit', component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  // 财务管理 -- 平台账户 -- 分销规则设置
  {
    path: '/platform/distributionRules', component: asyncComponent(() => import('container/finance/platform/distributionRules/distributionRules'))
  },
  // 财务管理 -- 平台账户 -- 分销规则设置 -- 详情
  {
    path: '/platform/distributionRules/addedit', component: asyncComponent(() => import('container/finance/platform/distributionRules/distributionRules-addedit'))
  },
  // 财务管理 -- 平台账户 -- 级差设置
  {
    path: '/platform/gradationRules', component: asyncComponent(() => import('container/finance/platform/gradationRules/gradationRules'))
  },
  // 财务管理 -- 平台账户 -- 级差设置 -- 详情
  {
    path: '/platform/gradationRules/addedit', component: asyncComponent(() => import('container/finance/platform/gradationRules/gradationRules-addedit'))
  },
  // 财务管理 -- 平台账户 -- 积分规则
  {
    path: '/platform/integralRules', component: asyncComponent(() => import('container/finance/platform/integralRules/integralRules'))
  },
  // 财务管理 -- 平台账户 -- 积分规则
  {
    path: '/platform/payRules', component: asyncComponent(() => import('container/finance/platform/payRules/payRules'))
  },
  // 财务管理 -- 平台账户 -- 会员等级设置
  {
    path: '/platform/memberLevel', component: asyncComponent(() => import('container/finance/platform/memberLevel/memberLevel'))
  },
  {
    path: '/platform/memberLevel/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 积分规则 -- 详情
  {
    path: '/platform/integralRules/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/platform/payRules/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 碳泡泡规则
  {
    path: '/platform/tppRules', component: asyncComponent(() => import('container/finance/platform/tppRules/tppRules'))
  },
  // 财务管理 -- 平台账户 -- 碳泡泡规则 -- 详情
  {
    path: '/platform/tppRules/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 邀请好友设置
  {
    path: '/platform/invitation', component: asyncComponent(() => import('container/finance/platform/invitation/invitation'))
  },
  // 财务管理 -- 平台账户 -- 邀请好友设置 -- 详情
  {
    path: '/platform/invitation/addedit', component: asyncComponent(() => import('container/finance/platform/invitation/invitation-addedit'))
  },
  // 财务管理 -- 平台账户 -- 账户查询
  {
    path: '/platform/account', component: asyncComponent(() => import('container/finance/platform/account/account'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 流水查询
  {
    path: '/platform/account/flows', component: asyncComponent(() => import('container/finance/platform/account/account-flows'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 提现回录
  {
    path: '/platform/account/enter', component: asyncComponent(() => import('container/finance/platform/account/account-enter'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 资金分布
  {
    path: '/platform/account/accounts', component: asyncComponent(() => import('container/finance/platform/account/account-list'))
  },
  // 财务管理 -- 平台账户 -- 流水查询
  {
    path: '/platform/flows', component: asyncComponent(() => import('container/finance/platform/flows/flows'))
  },
  // 财务管理 -- 充值管理 -- 线下充值
  {
    path: '/recharge/recharges', component: asyncComponent(() => import('container/finance/recharge/recharges/recharges'))
  },
  // 财务管理 -- 充值管理 -- 线下充值 -- 详情
  {
    path: '/recharge/recharges/addedit', component: asyncComponent(() => import('container/finance/recharge/recharges/recharges-addedit'))
  },
  // 财务管理 -- 充值管理 -- 充值查询
  {
    path: '/recharge/records', component: asyncComponent(() => import('container/finance/recharge/records/records'))
  },
  // 财务管理 -- 充值管理 -- 充值查询 -- 详情
  {
    path: '/recharge/records/addedit', component: asyncComponent(() => import('container/finance/recharge/recharges/recharges-addedit'))
  },
  // 财务管理 -- 取现管理 -- 取现规则
  {
    path: '/withdraw/rules', component: asyncComponent(() => import('container/finance/withdraw/rules/rules'))
  },
  // 财务管理 -- 取现管理 -- 取现规则 -- 详情
  {
    path: '/withdraw/rules/addedit', component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/withdraw', component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw'))
  },
  // 财务管理 -- 取现管理 -- 线下取现 -- 详情
  {
    path: '/withdraw/withdraw/addedit', component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw-addedit'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/records',
    component: asyncComponent(() => import('container/finance/withdraw/records/records'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/records/addedit', component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw-addedit'))
  },
  // 业务管理 -- 用户管理 -- 会员查询
  {
    path: '/user/users', component: asyncComponent(() => import('container/biz/user/users/users'))
  },
  // 业务管理 -- 用户管理 -- 会员查询 -- 详情
  {
    path: '/user/users/addedit', component: asyncComponent(() => import('container/biz/user/users/users-addedit'))
  },
  // 业务管理 -- 用户管理 -- 会员查询 -- 账户查询
  {
    path: '/user/users/accounts', component: asyncComponent(() => import('container/biz/user/users/user-accounts'))
  },
  // 业务管理 -- 用户管理 -- 签到记录
  {
    path: '/user/users/signIn', component: asyncComponent(() => import('container/biz/user/users/user-signIn'))
  },
  // 业务管理 -- 用户管理 -- 分享记录
  {
    path: '/user/shares', component: asyncComponent(() => import('container/biz/user/shares/shares'))
  },
  // 业务管理 -- 用户管理 -- 碳泡泡赠送记录
  {
    path: '/user/gives', component: asyncComponent(() => import('container/biz/user/gives/gives'))
  },
  // 业务管理 -- 用户管理 -- 账户查询
  {
    path: '/user/accounts', component: asyncComponent(() => import('container/biz/user/accounts/accounts'))
  },
  // 业务管理 -- 用户管理 -- 账户查询 -- 流水查询
  {
    path: '/user/accounts/flows', component: asyncComponent(() => import('container/biz/user/accounts/account-flows'))
  },
  // 业务管理 -- 用户管理 -- 账户查询 -- 流水查询 -- 详情
  {
    path: '/user/accounts/flows/addedit', component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 用户管理 -- 流水查询
  {
    path: '/user/flows', component: asyncComponent(() => import('container/biz/user/flows/flows'))
  },
  // 业务管理 -- 用户管理 -- 流水查询 -- 详情
  {
    path: '/user/flows/addedit', component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 业务规则 -- 好友排行权重设置
  {
    path: '/rules/weight', component: asyncComponent(() => import('container/biz/rules/weight/weight'))
  },
  // 业务管理 -- 业务规则 -- 好友排行权重设置 -- 详情
  {
    path: '/rules/weight/addedit', component: asyncComponent(() => import('container/biz/rules/weight/weight-addedit'))
  },
    // 业务管理--客户管理--客户管理
    {
        path: '/customer/customers', component: asyncComponent(() => import('container/biz/customer/customers/customers'))
    },
    // 业务管理--客户管理--报告列表
    {
        path: '/customer/customers/reportlist/reportlibrary', component: asyncComponent(() => import('container/biz/customer/reportlist/reportlibrary'))
    },
    // 客户管理-新增备注
    {
        path: '/customer/customers/addedit', component: asyncComponent(() => import('container/biz/customer/customer-addedit/customer-addedit'))
    }, // 客户管理-账户余额
    {
        path: '/customer/customers/detail', component: asyncComponent(() => import('container/biz/customer/customer-detail/customer-detail'))
    },
    // 业务管理--客户管理--开子账号
    {
        path: '/customer/subaccount', component: asyncComponent(() => import('container/biz/customer/subaccount/subaccount'))
    },
    // 业务管理--客户管理--账户查询
    {
        path: '/customer/accountquery', component: asyncComponent(() => import('container/biz/customer/accuntquery/accountquery'))
    },
    // 业务管理--用户查询--用户库
    {
        path: '/userquery/userbase', component: asyncComponent(() => import('container/biz/userquery/userbase/userbase'))
    },
    // 业务管理--用户查询--用户库--添加备注
    {
        path: '/userquery/userqueryaddedit', component: asyncComponent(() => import('container/biz/userquery/userquery-addedit/userquery-addedit'))
    },
    // 业务管理--用户查询--报告库
    {
        path: '/userquery/reportlibrary', component: asyncComponent(() => import('container/biz/userquery/reportlibrary/reportlibrary'))
    },
    // 业务管理--用户查询--白名单
    {
        path: '/userquery/whitelist', component: asyncComponent(() => import('container/biz/userquery/whitelist/whitelist'))
    },
    // 业务管理--用户查询--白名单--详情
    {
        path: '/userquery/whitelist/detail', component: asyncComponent(() => import('container/biz/userquery/whitelist/whitelist-detail'))
    },
    // 业务管理--用户查询--黑名单
    {
        path: '/userquery/blacklist', component: asyncComponent(() => import('container/biz/userquery/blacklist/blacklist'))
    },
    // 业务管理--用户查询--黑名单
    {
        path: '/userquery/blacklist/detail', component: asyncComponent(() => import('container/biz/userquery/blacklist/blacklist-detail'))
    },
    // 业务管理--系统参数管理--七牛图片参数
    {
        path: '/buyads/buyads', component: asyncComponent(() => import('container/public/buyADS/buyADS'))
    },
    // 业务管理--系统参数管理--七牛图片参数--修改
    {
        path: '/buyads/buyads/addedit', component: asyncComponent(() => import('container/public/buyADS/buyADS-addedit'))
    },
    // 业务管理--系统参数管理--安卓参数
    {
        path: '/general/andpublish', component: asyncComponent(() => import('container/general/andPublish'))
    },
    // 业务管理--系统参数管理--安卓参数--修改
    {
        path: '/general/andpublish/addedit', component: asyncComponent(() => import('container/general/andPublish-addedit'))
    }, // 业务管理--系统参数管理--苹果参数
    {
        path: '/general/iospublish', component: asyncComponent(() => import('container/general/iosPublish'))
    },
    // 业务管理--系统参数管理--苹果参数--修改
    {
        path: '/general/iospublish/addedit', component: asyncComponent(() => import('container/general/iosPublish-addedit'))
    }
];

export default ROUTES;
