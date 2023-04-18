import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from '../styles/demo.module.scss';
const Message = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const sendMessageHandler = () => {
        console.log('发送验证码');
    };
    const randomNumber = Math.floor(Math.random() * 100000);
    return (
        <div className={styles.card}>
            <Form
                name='basic'
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item
                    label='手机号'
                    name='phone'
                    rules={[
                        {
                            required: true,
                            message: '请输入你的手机号!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='验证码'
                    name='message'
                    rules={[
                        {
                            required: true,
                            message: '请输入验证码!',
                        },
                    ]}
                >
                    <Input disabled />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type='danger' onClick={sendMessageHandler}>
                        发送验证码
                    </Button>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Message;
