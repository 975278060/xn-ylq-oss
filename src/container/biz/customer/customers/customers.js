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
import { showWarnMsg, moneyFormat } from 'common/js/util';
import { activateJUser } from 'api/user';

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
            content: `确认${status === '0' ? '注销' : '激活'}用户？`,
            onOk: () => {
                this.props.doFetching();
                return activateJUser(code).then(() => {
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
            title: '登录账号',
            field: 'loginName'
        }, {
            title: '手机号',
            field: 'mobile',
            search: true
        }, {
            title: '姓名',
            field: 'realName'
        }, {
            title: '累计消费',
            field: 'amount1'
        }, {
            title: '账户余额',
            field: 'amount',
            render: (v, data) => {
                return data.account ? moneyFormat(data.account.amount) : '';
            }
        }, {
            title: '注册时间',
            field: 'createDatetime',
            type: 'datetime'
        }, {
            title: '状态',
            field: 'status',
            type: 'select',
            key: 'user_status',
            search: true
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
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    }else {
                        this.props.history.push(`/customer/customers/addedit?code=${keys[0]}`);
                    }
                },
                // 账户余额
                detail: (keys, items) => {
                    this.props.history.push(`/customer/customers/detail?detail=1&v=1&code=${keys[0]}`);
                },
                //  报告列表
                checklist: () => {
                    this.props.history.push(`/customer/customers/reportlist/reportlibrary`);
                },
                // 注销
                rock: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.rockOrActive(items[0].status, keys[0]);
                    }
                }}
        });
    }
}

export default Customers;
