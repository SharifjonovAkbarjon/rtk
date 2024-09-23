import { Form, Input } from 'antd'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const { Search } = Input

const Header = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    navigate(`/search?search-value=${values.search}`)
    
  }
  return (
    <>
      <div className='flex items-center bg-green-600 gap-8 p-4'>
        <Link to="/" className='block flex-1'>Logo</Link>
        <Form onFinish={onFinish} className='w-full'>
          <Form.Item
            className='m-0 w-full'
            name="search"
            rules={[
              {
                required: true,
                message: "Please input your search",
              }
            ]}
          >
            <Search placeholder="input search text" enterButton />
          </Form.Item>
        </Form>
      </div>
      <Outlet/>
    </>
  )
}

export default Header