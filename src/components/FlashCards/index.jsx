import dataForAvengers from "../DataForAvengers";
import styles from "./index.module.scss";
import FLipCard from "../FlipCard";
import { useState } from "react";

const FlashCard = () => {
	// console.log(handleCLick());
	const [flip, setFlip] = useState(false);

	const handleCLick = () => {
		setFlip(!flip);
		console.log("Clicked");
	};
	return (
		<div className={styles.hero}>
			{dataForAvengers.map((card) => (
				<div key={card.id} className={styles.flashCardContainer}>
					<div key={card.id} className={styles.flashCardFront}>
						<img src={card.image} alt="" />
					</div>
					<FLipCard handleCLick={handleCLick} />
				</div>
			))}
		</div>
	);
};

export default FlashCard;
