import { useState } from "react";
import dataForAvengers from "../DataForAvengers";
import styles from "./index.module.scss";

const FlashCard = () => {
	const [selectedId, setSelectedId] = useState("");

	const handleCLick = () => {
		setSelectedId(!selectedId);
	};
	// console.log(handleCLick());
	return (
		<div className={styles.hero}>
			{dataForAvengers.map((card) => (
				<div key={card.id} className={styles.flashCard} onClick={handleCLick}>
					<img src={card.image} alt="" />
					<p>Hello</p>
				</div>
			))}
			console.log(handleCLick());
		</div>
	);
};

export default FlashCard;
