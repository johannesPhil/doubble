import React from "react";
import AuthButton from "../components/AuthButton/AuthButton";
import { useGoogleLogin } from "@react-oauth/google";

const SignUp = () => {
	const signUp = useGoogleLogin({
		onSuccess: (response) => console.log(response),
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
						handleClick={signUp}
						target={"google"}>
						<img
							src={`/images/google.png`}
							alt=""
						/>
						<span>Sign Up with Google</span>
					</AuthButton>
					<p className="">
						No account? <span>Create one</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
