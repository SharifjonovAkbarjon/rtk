import { Form, Input } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

const Otp = () => {
    return (
        <>
            {/* <div>
                <Input.OTP length={6}/>
            </div> */}
            <Form className='flex items-center justify-center' layout='vertical'>
                <Form.Item name="otp">
                    <Title level={1}>
                        Verify your code
                    </Title>
                    <div className='flex items-center justify-center'>
                        <Input.OTP length={6} />
                    </div>
                </Form.Item>
            </Form>
        </>
    )
}

export default Otp