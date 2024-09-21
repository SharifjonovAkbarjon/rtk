import { Button, Form, Input, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useOtpVerifyRequestMutation } from '../../../redux/api/authApi'

// const { Title } = Typography

const Otp = () => {
    const [ otpVerifyRequest, {data}] = useOtpVerifyRequestMutation();
    const [searchParams] = useSearchParams()
    const [email, setEmail] = useState("")
    const [otp, setOpt] = useState("")

    useEffect(() => {
        if (searchParams.get("email")) {
            setEmail(atob(searchParams.get("email")))
        }
    }, [searchParams])

    const onFinish = () => {
        otpVerifyRequest({email, otp});
    };

    console.log(data);
    

    // const onchange = (text) => {
    //     console.log('onChange:', text);

    // }

    // const sharedProps = {
    //     onchange,
    // }

    return (
        <>
            <Form onFinish={onFinish} className='flex items-center flex-col justify-center' layout='vertical'>
                <Title level={1}>
                    Verify your code
                </Title>
                <div className='flex items-center justify-center'>
                    <Input.OTP length={6} onchange={(text) => setOpt(text)} />
                </div>
                <Form.Item>
                    <Button className='w-full' type="primary" htmlType="submit">
                        Verify
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default Otp
