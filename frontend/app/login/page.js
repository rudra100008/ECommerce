'use client'
import { useState } from "react";
import style from "../CSS/login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import api from "../Component/axiosInterceptor";
import baseURL from "../baseURl";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [validateUser, setValidateUser] = useState({
        email: '',
        password: ''
    })

    const onUserChange = (e) => {
        setUser(user => ({ ...user, [e.target.name]: e.target.value }))
    }

    const login = async () => {
        try {
            const response = await api.post(`${baseURL}/api/auth/login`, user);
            console.log("Login Response: ", response.data)
            const {redirectUrl} = response.data;
            setUser({
                email: '',
                password: ''
            });
            router.push(redirectUrl);
        } catch (error) {
            console.log("Login Error: ", error)
            if (error.response.data && error.response.status === 400) {
                const data = error.response.data;
                if (typeof data === 'object') {
                    setValidateUser(user => ({ ...user, ...data }))
                }
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await login();
        setIsLoading(false);

    }
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className={style.loginForm}>
            <header className={style.header}>Login In</header>
            <form onSubmit={handleSubmit} noValidate>
                <div className={style.inputForm}>
                    <label htmlFor="email">Email</label>
                    <div className={style.inputwrapper}>
                        <FontAwesomeIcon icon={faEnvelope} className={style.inputIcon} size="sm" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={onUserChange}
                            placeholder="example@gmail.com" />
                    </div>
                </div>
                {validateUser.email && <p className={style.error}>{validateUser.email}</p>}
                <div className={style.inputForm}>
                    <label htmlFor="password">Password</label>
                    <div className={style.inputwrapper}>
                        <FontAwesomeIcon icon={faLock} className={style.inputIcon} size="sm" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={onUserChange}
                            placeholder="Enter password" />
                    </div>
                </div>
                {validateUser.password && <p className={style.error}>{validateUser.password}</p>}
                <div className={style.formAction}>
                    <button type="submit" onKeyDown={(e) => e.key === 'Enter'} disabled={isLoading}>{
                        isLoading ? (
                            <span className={style.loading}>Signing In...</span>
                        ) : (
                            "Sign In"
                        )
                    }
                    </button>
                    <span><a href="#">Forget password?</a></span>
                </div>
            </form>
            <div className={style.divider}>
                <span className={style.dividerText}>or continue with</span>
            </div>
            <div>

                <a href="http://localhost:8080/oauth2/authorization/google">
                    <button
                        className={style.socialButton}
                        type="button"

                    >
                        <FontAwesomeIcon icon={faGooglePlusG} size="xl" />
                    </button>
                </a>
            </div>
            <div className={style.signupPrompt}>
                Don't have a account?
                <a href="/signup" className={style.signupLink}>Sign up</a>
            </div>
        </div>
    );
}
