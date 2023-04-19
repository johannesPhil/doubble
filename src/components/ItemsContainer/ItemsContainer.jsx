import React, { useEffect } from "react";
import TemplateCard from "../TemplateCard/TemplateCard";
import itemStyle from "./ItemsContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	getSessionsByUser,
	getSessions,
} from "../../Redux/actions/sessionActions";
import { NavLink } from "react-router-dom";

const ItemsContainer = () => {
	const dispatch = useDispatch();
	const { sessions } = useSelector((state) => state.sessions);

	useEffect(() => {
		dispatch(getSessionsByUser());
	}, []);

	return (
		<div className={itemStyle.container}>
			<div className="heading">
				<h1 className="heading heading__large">Recently Added</h1>
			</div>
			{sessions ? (
				<div className={itemStyle.items}>
					{sessions.map((session) => (
						<NavLink
							to={`/app/session/${session.id}`}
							key={session.id}>
							<TemplateCard data={session} />
						</NavLink>
					))}
				</div>
			) : (
				<div className={itemStyle.emptyItem}>
					<img
						src="/images/paper-clip.gif"
						alt="add note"
					/>
					<p>No Notes has been created</p>
				</div>
			)}
		</div>
	);
};

export default ItemsContainer;
