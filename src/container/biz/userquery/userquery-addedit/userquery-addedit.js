import React from 'react';
import { Form } from 'antd';
import { getQueryString, moneyFormat } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class UserqueryAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
        title: '登录账号',
        field: 'loginName',
        readonly: true
    }, {
        title: '手机号',
        field: 'mobile',
        readonly: true
    }, {
        title: '推荐人',
        field: 'realName',
        readonly: true
    }, {
        title: '所属客户',
        field: 'updater',
        readonly: true
    }, {
        title: '注册时间',
        field: 'createDatetime',
        type: 'datetime',
        readonly: true
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'user_status',
        readonly: true
    }, {
      title: '备注',
      field: 'remark',
        required: true
    }];
    return this.buildDetail({
      fields,
        key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 630117,
      editCode: 805023
    });
  }
}

export default UserqueryAddEdit;
