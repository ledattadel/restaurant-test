import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@/components/Alert/Alert';
import { Toaster } from 'react-hot-toast';
import { Checkbox } from 'antd';
import PasswordIcon from '@/assets/password.icon';
import UserIcon from '@/assets/user.icon';
import { EyeOpen, EyeClosed } from 'akar-icons';
import * as AuthActions from '@/redux/actions/authAction';
import * as picture from '@/assets/picture/index';

import './index.scss';

let logoComponent = (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="59.25" fill="#D9D9D9" stroke="#C5C5C5" stroke-width="1.5" />
    </svg>
);
const Login = () => {
    const { auth } = useSelector((state) => state);
    const initialState = { username: '123', password: '123' };
    const [userData, setUserData] = useState(initialState);
    const { username, password } = userData;
    const [focusUsername, setFocusUsername] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);

    const [typePass, setTypePass] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.token) navigate('/');
    }, [auth.token, navigate]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        console.log(userData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AuthActions.login(userData));
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const handleFocus = (e) => {
        console.log(e.target.outerHTML[13]);
        if (e.target.outerHTML[13] === 'u') {
            setFocusUsername(true);
            setFocusPassword(false);
            setTypePass(false);
        } else if (e.target.outerHTML[13] === 'p') {
            setFocusPassword(true);
            setFocusUsername(false);
        } else {
        }
    };

    const handleRememberPassword = () => {};

    return (
        <div
            className="authpage"
            style={{
                background: `url(${picture.bground})
        rgba(37, 37, 37, 0.2)`,
            }}
        >
            <Alert></Alert>
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        fontSize: 16,
                    },
                }}
            />
            <form className="authpage_form" onSubmit={handleSubmit}>
                <div className="authform_logo">
                    <div className="logo">{logoComponent}</div>
                </div>
                <div className="authform_login--title">
                    <span>ĐĂNG NHẬP</span>
                </div>

                <div className="authform_login--input">
                    <div className="form-group input-username input-form">
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            id="exampleInputUsername"
                            aria-describedby="usernameHelp"
                            onChange={handleChangeInput}
                            value={username}
                            placeholder="Tên đăng nhâp"
                            onFocus={handleFocus}
                        />
                        <div className="icon">
                            <UserIcon isHandle={focusUsername}></UserIcon>
                        </div>
                    </div>

                    <div className="form-group input-password input-form">
                        <div className="pass">
                            <input
                                name="password"
                                type={typePass ? 'text' : 'password'}
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={handleChangeInput}
                                value={password}
                                placeholder="Mật khẩu"
                                onFocus={handleFocus}
                            />

                            <div className="icon">
                                <PasswordIcon isHandle={focusPassword}></PasswordIcon>
                            </div>
                            <div
                                className="icon-showPassword"
                                onClick={() => {
                                    setFocusPassword(true);
                                    setFocusUsername(false);
                                    setTypePass(!typePass);
                                }}
                            >
                                {focusPassword === true ? (
                                    typePass ? (
                                        <EyeOpen style={{ color: 'F78B2D' }} />
                                    ) : (
                                        <EyeClosed style={{ color: 'F78B2D' }} />
                                    )
                                ) : (
                                    <EyeClosed style={{ color: 'A3A3A3' }} />
                                )}
                            </div>
                            {/* <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small> */}
                        </div>
                    </div>
                    <div className="form-group form-repass">
                        <Checkbox onChange={onChange} onClick={handleRememberPassword}>
                            Nhớ mật khẩu
                        </Checkbox>
                    </div>

                    <button
                        type="submit"
                        className="authform_login--btn"
                        disabled={username && password ? false : true}
                    >
                        <span>ĐĂNG NHẬP</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
