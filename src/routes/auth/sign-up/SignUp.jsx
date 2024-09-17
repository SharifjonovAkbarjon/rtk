import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Input, Typography } from 'antd';
import { useSignUpRequestMutation } from '../../../redux/api/authApi';

const {Title, Text} = Typography;

const SignUp = () => {
    const [signUpRequest, {data, isSuccess}] = useSignUpRequestMutation();
    const onFinish = (values) => {
        signUpRequest(values)
    };
    console.log(data);
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
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
                <Title level={1}>Sign Up</Title>
                <Form.Item
                    label="Firtsname"
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
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
                        Sign Up 
                    </Button>
                </Form.Item>
                <Text> Already have an accaunt? <Link to="/auth/sign-in">Sign in</Link> </Text>
            </Form>
        </>
    )
}

export default SignUp