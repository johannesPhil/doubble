import React from "react";
import { Link, Outlet } from "react-router-dom";

const Landing = () => {
	return (
		<div className="landing">
			<nav className="navigation">
				<div className="navigation__logo">
					<img
						src="/images/logo-full.svg"
						alt=""
						className="navigation__logo--full"
					/>
					<img
						src="/images/logo-mini.svg"
						alt=""
						className="navigation__logo--mobile"
					/>
				</div>
				<ul className="navigation__links">
					<Link
						to="/"
						className="navigation__link">
						Products
					</Link>
					<Link
						to="/"
						className="navigation__link">
						Integrations
					</Link>
					<Link
						to="/"
						className="navigation__link">
						Templates
					</Link>
					<Link
						to="/"
						className="navigation__link">
						Pricing
					</Link>
					<Link
						to="/"
						className="navigation__link">
						Company
					</Link>
				</ul>

				<div className="navigation__cta">Join Waitlist</div>
			</nav>
			<div className="landing__content">
				<h1 className="landing__title">
					Meetings just got more{" "}
					<span className="landing__title--highlight">
						productive
					</span>
				</h1>
				<h3 className="landing__sub-title">
					Taking notes just got better and get more productive in
					every meetings
				</h3>

				<form className="form">
					<input
						type="email"
						name=""
						id=""
						placeholder="Enter mail address"
						className="form__control"
					/>
					<button
						type="submit"
						className="form__button">
						Join Waitlist
					</button>
				</form>
			</div>
			<div className="landing__img">
				<Outlet />
			</div>
		</div>
	);
};

export default Landing;
