import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Layout from '../My Components/Layout'

export default function Login() {
  return (
    <Layout>
        <h1 className='m-auto col-4 '>Login Form</h1>
        {/* <div className=' m-auto col-4'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div> */}
        
    </Layout>
  )
}
