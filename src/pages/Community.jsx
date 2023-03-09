import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TemplateCard from "../components/TemplateCard/TemplateCard";
import ItemsContainer from "../components/ItemsContainer/ItemsContainer";
import CommunityTemplates from "../components/CommunityTemplates/CommunityTemplates";

const Community = () => {
	const [activeTab, setActiveTab] = useState("doubble");
	const templates = [
		{
			name: "Cardily Meeting",
		},
		{
			name: "Retreat Meeting",
			publisher: "Someone",
			likes: 20,
		},
		{
			name: "Retreat Meeting",
			publisher: "Someone",
			likes: 20,
		},
		{
			name: "Retreat Meeting",
			publisher: "Someone",
			likes: 20,
		},
	];

	function searchTemplate(e) {
		//TODO:search templates based on active tab
	}

	return (
		<div className="community">
			<div className="community__topbar">
				<NavLink
					to={-1}
					className="community__navigation">
					<img
						src="/images/top-right.svg"
						alt="previous page"
					/>
					<span>Back</span>
				</NavLink>
				<div className="community__tabs">
					<span
						className="community__tab community__tab--doubble"
						onClick={() => setActiveTab("doubble")}>
						Curated by doubble
					</span>
					<span
						className="community__tab community__tab--community"
						onClick={() => setActiveTab("community")}>
						By Community, For Community
					</span>
					<span className={`switch switch__${activeTab}`}></span>
				</div>
				<span className="community__cta">Import</span>
			</div>
			<div className="community__templates">
				<div className="community__templates-top">
					<div className="community__headings">
						{activeTab == "doubble" ? (
							<>
								<h1 className="heading__large">
									All templates
								</h1>
								<h3 className="heading__small">
									Turn any meeting into an action plans
								</h3>
							</>
						) : activeTab == "community" ? (
							<>
								<h1 className="heading__large">
									Made by Community, for Community
								</h1>
								<h3 className="heading__small">
									Turn any meeting into an action plans
								</h3>
							</>
						) : null}
					</div>
					<span className="community__search">
						<img
							src="/images/search.svg"
							alt=""
						/>
						<input
							type="text"
							name=""
							id=""
							onChange={searchTemplate}
						/>
					</span>
				</div>
				<div className="community__items">
					{templates.map((template, index) => (
						<CommunityTemplates data={template} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Community;
