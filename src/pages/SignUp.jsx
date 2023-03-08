import React from "react";
import AuthButton from "../components/AuthButton/AuthButton";

const SignUp = () => {
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
						target={"google"}
						text={"Sign up with Google"}
						hover={false}
					/>
					<AuthButton
						target={"microsoft"}
						text={"Sign up with Microsoft"}
						hover={true}
					/>
					<p className="">
						No account? <span>Create one</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
