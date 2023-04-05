import React from "react";
import { tools, tool, icon, img } from "./SessionOptions.module.scss";

const SessionOptions = () => {
	return (
		<div className={tools}>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/link.svg"
						alt="merge"
					/>
				</span>
				<span className="tool__name">Merge</span>
			</div>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/Star.svg"
						alt="toggle favourite"
					/>
				</span>
				<span className="tool__name">Favourite</span>
			</div>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/copy.svg"
						alt="copy"
					/>
				</span>
				<span className="tool__name">Copy</span>
			</div>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/export.svg"
						alt="export"
					/>
				</span>
				<span className="tool__name">Export</span>
			</div>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/save.svg"
						alt="archive"
					/>
				</span>
				<span className="tool__name">Archive</span>
			</div>
			<div className={tool}>
				<span className={icon}>
					<img
						src="/images/print.svg"
						alt="print"
					/>
				</span>
				<span className="tool__name">Print</span>
			</div>
		</div>
	);
};

export default SessionOptions;
