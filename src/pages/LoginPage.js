import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage() {
  return (
    <div className="box-login d-flex align-items-center position-relative">
        <div style={{zIndex:-5}} className="body-ku card shadow container-fluid position-absolute start-0 end-0 top-0 bottom-0 bg-light"></div>
        <div className="form-login position-relative p-3">
            <div className="judul-login d-flex">
                <h1 className='text-center'>Login</h1>
            </div>
            <Form style={{zIndex:2}} className="position-absolutes">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="btn-login-page">
                Submit
                </Button>
            </Form>
            <div style={{zIndex:-1}} className="card container-fluid position-absolute start-0 end-0 top-0 bottom-0 bg-light opacity-25"></div>
        </div>
    </div>

  )
}
