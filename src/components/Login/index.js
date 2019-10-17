import React,{useState} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.css';

import {useSelector,useDispatch} from 'react-redux'
import {logged} from '../../actions'

const divStyle={
    display: 'flex',
    justifyContent: 'center', /* 水平居中 */
    alignItems: 'center', /* 垂直居中 */
    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    width: '100%',
    height: document.body.clientHeight
};
const Login = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const isLogged = useSelector(state=>state.isLogged);
    const dispatch = useDispatch();


    const updateUsername = (e) => {
        setUsername(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    const toLogin = e => {
        e.preventDefault();
        console.log(username)
        dispatch(logged(username,password))
    }
    return (
        <div  style={divStyle}>
                <Form  className="login-form" onSubmit={toLogin}>
                    <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                value={username}
                                onChange={updateUsername}
                            />
                    </Form.Item>
                    <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                                value={password}
                                onChange={updatePassword}
                            />
                    </Form.Item>
                    <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
        </div>
    )
}

export default Login