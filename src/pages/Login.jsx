import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import AuthButton from "../components/AuthButton/AuthButton";
import { signIn } from "../Redux/actions/authActions";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = (props) => {
	const navigate = useNavigate();

	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/app" } };

	const dispatch = useDispatch();
	const {
		auth: { isAuthenticated },
	} = props;

	const login = useGoogleLogin({
		onSuccess: async (response) => {
			dispatch(signIn(response.access_token));
		},
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate(from);
		}
	}, [isAuthenticated]);

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
					<AuthButton target={"microsoft"}>
						<img
							src={`/images/microsoft.png`}
							alt=""
						/>
						<span>Login With MicroSoft</span>
					</AuthButton>
					<p className="auth__links">
						By continuing, you agree to the{" "}
						<span className="auth__link">Terms of use</span>, and{" "}
						<span className="auth__link">Privacy Policy</span> of
						doubble.
					</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

const mapDispatchToProps = { signIn };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
