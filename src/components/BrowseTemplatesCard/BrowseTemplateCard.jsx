import React from 'react'
import {card,card_design,card_content,card_name,card_text} from './BrowseTemplateCard.module.scss'


const BrowseTemplateCard = () => {
  return (
		<div className={card}>
			<div className={card_design}>
				<span className={card_content}></span>
				<span className={card_text}>Templates</span>
			</div>
			<p className={card_name}>Browse All</p>
		</div>
  );
}

export default BrowseTemplateCard
