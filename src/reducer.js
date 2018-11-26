import { combineReducers } from 'redux';

import { user } from './redux/user';
import { menu } from './redux/menu';
import { securityRole } from './redux/security/role';
import { securityMenu } from './redux/security/menu';
import { securitySysParam } from './redux/security/sysParam';
import { securityUser } from './redux/security/user';
import { securityDataDict } from './redux/security/dataDict';
import { publicBanner } from './redux/public/banner';
import { publicNotice } from './redux/public/notice';
/** ***** 财务管理start ***** **/
// 财务管理--平台账户
import { platformDistributionRules } from './redux/finance/platform/distributionRules';
import { platformGradationRules } from './redux/finance/platform/gradationRules';
import { platformIntegralRules } from './redux/finance/platform/integralRules';
import { platformPayRules } from './redux/finance/platform/payRules';
import { platformMemberLevel } from './redux/finance/platform/memberLevel';
import { platformTppRules } from './redux/finance/platform/tppRules';
import { platformInvitation } from './redux/finance/platform/invitation';
import { platformAccount } from './redux/finance/platform/account';
import { platformAccountFlows } from './redux/finance/platform/accountFlows';
import { platformAccountList } from './redux/finance/platform/accountList';
import { platformFlows } from './redux/finance/platform/flows';
// 财务管理--充值管理
import { rechargeRecharges } from './redux/finance/recharge/recharges';
import { rechargeRecords } from './redux/finance/recharge/records';
// 财务管理--取现管理
import { withdrawRules } from './redux/finance/withdraw/rules';
import { withdrawWithdraw } from './redux/finance/withdraw/withdraw';
import { withdrawRecords } from './redux/finance/withdraw/records';
// 业务管理--用户管理
import { userUsers } from './redux/biz/user/users';
import { userUserAccounts } from './redux/biz/user/user-accounts';
import { userSignIn } from './redux/biz/user/signIn';
import { userShares } from './redux/biz/user/shares';
import { userGives } from './redux/biz/user/gives';
import { userAccounts } from './redux/biz/user/accounts';
import { userAccountFlows } from './redux/biz/user/account-flows';
import { userFlows } from './redux/biz/user/flows';
// 业务管理--业务规则
import { rulesWeight } from './redux/biz/rules/weight';
// 客户管理--客户管理
import { customerCustomers } from './redux/biz/customer/customers';
// 客户管理--客户查询
import { customerAccountQuery } from './redux/biz/customer/accountquery';
// 客户管理--开子账号
import { customerSubAccount } from './redux/biz/customer/subaccount';
// 用户查询--用户库
import { userQueryUserBase } from './redux/biz/userquery/userbase';
// 用户查询--用户库-报告库
import { userQueryReporyLibrary } from './redux/biz/userquery/reportlibrary';
// 用户查询--白名单
import { userQueryWhiteList } from './redux/biz/userquery/whitelist';
// 用户查询--黑名单
import { userQueryBlackList } from './redux/biz/userquery/blacklist';

export default combineReducers({
  user,
  menu,
  securityRole,
  securityMenu,
  securityUser,
  securitySysParam,
  securityDataDict,
  publicBanner,
  publicNotice,
  platformDistributionRules,
  platformGradationRules,
  platformIntegralRules,
  platformPayRules,
  platformMemberLevel,
  platformTppRules,
  platformInvitation,
  platformAccount,
  platformAccountFlows,
  platformAccountList,
  platformFlows,
  rechargeRecharges,
  rechargeRecords,
  withdrawRules,
  withdrawWithdraw,
  withdrawRecords,
  userUsers,
  userUserAccounts,
  userSignIn,
  userShares,
  userGives,
  userAccounts,
  userAccountFlows,
  userFlows,
  rulesWeight,
    customerCustomers,
    customerAccountQuery,
    customerSubAccount,
    userQueryUserBase,
    userQueryReporyLibrary,
    userQueryWhiteList,
    userQueryBlackList
});
