import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import {injectIntl} from 'react-intl'
import {Map} from 'immutable'
import moment from 'moment'
import {Row, Col, Form, Input, Button} from 'antd'
import styles from '../index.less';
import InputPicture from '../components/InputPicture';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

function Edit({dispatch,user,match,intl:{formatMessage}}) {
  const [form] = Form.useForm();
  
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  };

  const info=user.getIn(['byId',match.params.id])||Map();

  function submitData(values){
    if(match.params.id){
      values.id=match.params.id
    }
    values.create_time=moment().format('YYYY-MM-DD HH:mm:ss');
    
    dispatch({
      type:'user/modifyItem',
      payload:values
    })
  }
  form.setFieldsValue({
    name: info.get('name'),
    age: info.get('age'),
    email: info.get('email'),
    address: info.get('address'),
    love_color: info.get('love_color'),
    avatar: info.get('avatar'),
    description: info.get('description'),
  });
  return (
    <div className={styles.page}>
      <Form 
        onFinish={submitData}
        form={form}
      >
          <FormItem
            {...formItemLayout}
            label={'姓名'}
            name={'name'}
            rules={[{ 
              required: true, 
              message: formatMessage({id: 'App.enter'})
            }]}
          >
                <Input />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'年龄'}
            name={'age'}
            rules={[{ 
              required: true, 
              message: formatMessage({id: 'App.enter'}) 
            }]}
          >
                <Input />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'邮箱'}
            name={'email'}
            rules={[{ 
              required: true, 
              message: formatMessage({id: 'App.enter'}) 
            }]}
          >
                <Input />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'地址'}
            name={'address'}
            rules={[{ 
              required: true, 
              message: formatMessage({id: 'App.enter'}) 
            }]}
          >
                <Input />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'喜爱颜色'}
            name={'love_color'}
            initialValue={'#FFFFFF'}
          >
                <Input type="color" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'头像'}
            name={'avatar'}
          >
              <InputPicture />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={'简介'}
            name={'description'}
          >
                <TextArea rows={6} />
          </FormItem>
          <FormItem>
              <Row>
                <Col offset={6}>
                  <Button type="primary" htmlType="submit">
                      提交
                  </Button>
                </Col>
              </Row>
          </FormItem>
      </Form>
    </div>
  );
}

Edit.propTypes = {

};

export default connect(({
  user
})=>({
  user
}))(injectIntl(Edit));
