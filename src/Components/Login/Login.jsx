import React from 'react'
import {Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';


const LoginForm = (props) => {

    return (<div>
        <Form
            name="basic"
            labelCol={{
                span: 3,
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={props.onSubmit}


        >

            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
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
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {props.captchaUrl && <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <img src={props.captchaUrl}/>
            </Form.Item>}
            {props.captchaUrl && <Form.Item
                label="captcha"
                name="captcha"
                rules={[
                    {
                        required: true,
                        message: 'Please input Captcha!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            }

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    </div>
        /*<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>*/
    )
};
/*const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);*/
const Login = (props) => {
    const onSubmit = (values) => {
        props.login(values.username, values.password, values.remember, values.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    }
}

export default Login;
