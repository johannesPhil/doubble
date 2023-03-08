import React from "react";
import ActionList from "../ActionList/ActionList";
import style from "./ActionItemsGroup.module.scss";

const ActionItemsGroup = ({ data }) => {
	return (
		<div className={style.item_group}>
			<h3 className="">{data.name}</h3>
			{data.items.length ? (
				data.items.map((item) => <ActionList action={item} />)
			) : (
				<div className={style.empty}>
					Group is empty.
					<span className={style.cta_text}>
						Create an action item{" "}
					</span>
					or drag one into this section
				</div>
			)}
		</div>
	);
};

export default ActionItemsGroup;
