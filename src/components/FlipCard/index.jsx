import styles from "./index.module.scss";
import { useState } from "react";
import dataForAvengers from "../DataForAvengers";

const FLipCard = () => {
	const [flip, setFlip] = useState(false);

	const handleCLick = () => {
		setFlip(!flip);
		console.log("Clicked");
	};

	return (
		<div className={styles.flashCardBackContainer}>
			{dataForAvengers.map((paragraph) => (
				<div key={paragraph.id} className={styles.flashCardBack}></div>
			))}
		</div>
	);
};

export default FLipCard;
