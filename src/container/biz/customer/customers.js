import React from 'react';
import { Modal } from 'antd';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/biz/customer/customers';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';
import { activateUser } from 'api/user';

const typeDict = {
    'P': '平台',
    'O': '产权',
    'M': '养护',
    'A': '代理商',
    'S': '业务员',
    'U': 'C端用户'
};

@listWrapper(
    state => ({
        ...state.customerCustomers,
        parentCode: state.menu.subMenuCode
    }),
    { setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Customers extends React.Component {
    rockOrActive(status, code) {
        Modal.confirm({
            okText: '确认',
            cancelText: '取消',
            content: `确认${status === '0' ? '禁止登录' : '恢复登录'}用户？`,
            onOk: () => {
                this.props.doFetching();
                return activateUser(code).then(() => {
                    this.props.getPageData();
                    showWarnMsg('操作成功');
                }).catch(() => {
                    this.props.cancelFetching();
                });
            }
        });
    }
    render() {
        const fields = [{
            title: '手机号',
            field: 'mobile'
        }, {
            title: '昵称',
            field: 'roleCode '
        }, {
            title: '推荐人',
            field: 'orderDir '
        }, {
            title: '累计消费',
            field: 'updater',
            search: true
        }, {
            title: '账户余额',
            field: 'xx'
        }, {
            title: '注册时间',
            field: 'createDatetime',
            type: 'datetime'
        }, {
            title: '状态',
            field: 'status'
        }, {
            title: '备注',
            field: 'remark'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'userId',
            pageCode: 630115,
            searchParams: {
                companyCode: ''
            },
            btnEvent: {
                // 添加备注
                addRemark: (keys, items) => {
                    // if (!keys || !keys.length) {
                    //     showWarnMsg('请选择记录');
                    // } else if (keys.length > 1) {
                    //     showWarnMsg('请选择一条记录');
                    // } else {
                        this.props.history.push(`/customer/customers/addedit?code=${keys[0]}`);
                    // }
                },
                detail: (keys, items) => {
                    this.props.history.push(`/customer/customers/detail?code=${keys[0]}`);
                },
                // 激活
                active: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (items[0].status === '0') {
                        showWarnMsg('该用户已被激活');
                    } else {
                        this.rockOrActive(items[0].status, keys[0]);
                    }
                },
                // 注销
                rock: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (items[0].status !== '0') {
                        showWarnMsg('该用户已被禁止登录');
                    } else {
                        this.rockOrActive(items[0].status, keys[0]);
                    }
                },
                // 签到记录
                signIn: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/users/signIn?code=${keys[0]}`);
                    }
                }
            }
        });
    }
}

export default Customers;
