'use client'
import { useState } from 'react';
import style from '../CSS/signup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import api from "../Component/axiosInterceptor"
import baseURL from '../baseURl';
export default function SignUpPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [validate, setValidate] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onUserChange = (e) => {
        setUser(user => ({ ...user, [e.target.name]: e.target.value }))
    }

    const registerUser = async () => {
        try {
            const response = await  api.post(`${baseURL}/api/auth/signup`, user, {});
            console.log("SignUp:", response);
            setUser({
                username: '',
                email: '',
                password: ''
            });
              router.push('/login');
        } catch (error) {
            console.log("error: ", error)
            if(error.response  && error.response.status === 400){
                const data = error.response.data;
                if(typeof data === 'object'){
                setValidate(prev=>({...prev,...data}))
                }
            }
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        await registerUser();
        setIsLoading(false);
    }
    if (isLoading) {
        return (
            <div className={style.redirectPrompt}>Redirecting to login page.....</div>
        )
    }

    return (
        <div className={style.signupBody}>
            <header className={style.header}>Sign Up</header>
            <form onSubmit={handleSubmit} noValidate>
                <div className={style.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <div className={style.inputWrapper}>
                        <FontAwesomeIcon icon={faUser} className={style.inputIcon} />
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={user.username}
                            onChange={onUserChange}
                            placeholder='Enter username'
                            className={style.input}
                        />
                    </div>
                    {validate.username && <p className = {style.error}>{validate.username}</p>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <div className={style.inputWrapper}>
                        <FontAwesomeIcon icon={faEnvelope} className={style.inputIcon} />
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={onUserChange}
                            placeholder='example@gmail.com'
                            className={style.input}
                        />
                    </div>
                    {validate.email && <p className={style.error}>{validate.email}</p>}
                </div>
                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <div className={style.inputWrapper}>
                        <FontAwesomeIcon icon={faLock} className={style.inputIcon} />
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={user.password}
                            onChange={onUserChange}
                            placeholder='Enter password'
                            className={style.input}
                        />
                    </div>
                    {validate.password && <p className={style.error}>{validate.password}</p>}
                </div>

                <div className={style.actionGroup}>
                    <button type='submit' onKeyDown={(e)=> e.key === 'Enter'} className={style.submitButton}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}