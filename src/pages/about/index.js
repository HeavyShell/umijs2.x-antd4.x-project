import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import {Timeline} from 'antd';
import styles from './index.less';

function Index({about}) {
  return (
    <div className={styles.page}>
      <h3 style={{marginBottom:'15px'}}>历史版本：</h3>
      <Timeline>
        <Timeline.Item color={'green'}>version：umi2.x-antd4.x----2020-11-05</Timeline.Item>
      </Timeline>
    </div>
  );
}

Index.propTypes = {

};

export default connect(({
  about
})=>({
  about
}))(Index);
