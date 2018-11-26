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
} from '@redux/biz/userquery/reportlibrary';
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
        ...state.userQueryReporyLibrary,
        parentCode: state.menu.subMenuCode
    }),
    { setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UserBase extends React.Component {
    rockOrActive(status, code) {
        Modal.confirm({
            okText: '确认',
            cancelText: '取消',
            content: `确认${status === '0' ? '注销' : '激活'}用户？`,
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
            title: '报告编号',
            field: 'mobile'
        }, {
            title: '报告主人',
            field: 'loginName',
            search: true
        }, {
            title: '手机号',
            field: 'userRefree',
            type: 'select'
        }, {
            title: '所属业务员',
            field: 'createDatetime',
            type: 'datetime',
            search: true
        }, {
            title: '类型',
            field: 'dateStart',
            type: 'datetime'
        }, {
            title: '报告规格',
            field: 'remark',
            search: true
        }, {
            title: '综合报告分',
            field: 'remark'
        }, {
            title: '完整度',
            field: 'remark'
        }, {
            title: '填写时间',
            field: 'createDatetime',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'userId',
            pageCode: 805120,
            btnEvent: {
                // 账户查询
                accounts: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/user/users/accounts?code=${keys[0]}`);
                    }
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
                        showWarnMsg('该用户已被注销');
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

export default UserBase;
