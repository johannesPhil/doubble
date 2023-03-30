import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../axios";
import AuthButton from "../components/AuthButton/AuthButton";

const Login = () => {
	const login = useGoogleLogin({
		onSuccess: async (response) => {
			let { data } = await axiosInstance.post(`auth/google`, {
				access_token: response.access_token,
			});

			console.log(response, data);
		},
	});

	return (
		<div className="auth">
			<div className="auth__main">
				<div className="illustration illustration__top"></div>
				<div className="illustration illustration__bottom"></div>
				<div className="auth__heading">
					<img
						src="/images/logo-full.svg"
						alt="logo"
					/>
					<p className="">
						Taking notes just got better and get more productive in
						every meetings
					</p>
				</div>
				<div className="auth__methods">
					<AuthButton
						handleClick={login}
						target={"google"}>
						<img
							src={`/images/google.png`}
							alt=""
						/>
						<span>Login with Google</span>
					</AuthButton>
					{/* <AuthButton
						target={"microsoft"}
				
					/> */}
					<p className="">
						No account? <span>Create one</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
