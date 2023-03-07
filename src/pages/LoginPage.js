import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from '../Components/Navigation'

export default function LoginPage() {
  return (
    <div className="box-login">
         <Navigation />
        <div className="judul-login">
            <h1>Login</h1>
        </div>
        <div className="form-login">
            <Form>
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
        </div>
    </div>

  )
}
