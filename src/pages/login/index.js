import React, {Component} from 'react';
import {connect} from 'dva'
import {injectIntl} from 'react-intl'
import {Row, Col, Form, Input, Button} from 'antd'
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

const FormItem = Form.Item

const Login = ({dispatch,intl:{formatMessage}})=>{

    const [form] = Form.useForm();

    const loginSubmit=(values)=>{
        dispatch({
            type:'login/login',
            payload:{
                values
            }
        })
    }

    return(
        <Row>
            <Col className={classnames(styles.loginFormCol)}>
                <Form onFinish={loginSubmit} className={classnames(styles.loginForm)}>
                        <h3>{formatMessage({id: 'App.login'})}</h3>
                        <FormItem
                            name={'username'}
                            rules={[{ 
                                required: true, 
                                message: formatMessage({id: 'App.enter'})+formatMessage({id: 'App.username'}) 
                            }]}
                        >
                            <Input autoComplete={'off'} prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={formatMessage({id: 'App.username'})+'(admin)'} />
                            
                        </FormItem>
                        <FormItem
                            name={'password'}
                            rules={[{ 
                                required: true, 
                                message: formatMessage({id: 'App.enter'})+formatMessage({id: 'App.password'}) 
                            }]}
                        >
                            <Input autoComplete={'off'} prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder={formatMessage({id: 'App.password'})+'(123456)'} />
                            
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className={classnames(styles.loginBtn)}>
                                {formatMessage({id: 'App.login'})}
                            </Button>
                        </FormItem>
                    </Form>
            </Col>
        </Row>
    )
}

export default connect(({

})=>({

}))(injectIntl(Login))