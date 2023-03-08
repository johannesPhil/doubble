import React from "react";

const Community = () => {
	return (
		<div className="community">
			<div className="community__top">
				<div className="community__navigation">
					<img
						src="/images/top-right.svg"
						alt="previous page"
					/>
					<span>Back</span>
				</div>
				<div className="community__tabs">
					<span className="community__tab community__tab--doubble">
						Curated by doubble
					</span>
					<span className="community__tab community__tab--community">
						By Community, For Community
					</span>
					<span className="switch switch__doubble"></span>
				</div>
				<span className="community__cta">Import</span>
			</div>
		</div>
	);
};

export default Community;
