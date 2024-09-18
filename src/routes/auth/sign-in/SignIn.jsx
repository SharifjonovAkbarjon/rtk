import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
const {Title, Text} = Typography;

const SignIn = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            layout='vertical'
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Title level={1}>Sign in</Title>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button className='w-full' type="primary" htmlType="submit">
                    Sign in
                </Button>
            </Form.Item>
            <Text> Don't have an accaunt? <Link to="/auth/sign-up">Sign up</Link> </Text>
            
        </Form>
    )

}

export default SignIn;