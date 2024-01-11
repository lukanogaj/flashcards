import dataForAvengers from "../DataForAvengers";
import styles from "./index.module.scss";
// import FLipCard from "../FlipCard";
import { useState } from "react";

const FlashCard = () => {
	// console.log(handleCLick());
	const [setImage, setSelectedImage] = useState(null);

	const handleClick = (id) => {
		setSelectedImage(id);
		console.log("clicked");
	};
	return (
		<div className={styles.hero}>
			{dataForAvengers.map((card) => (
				<div
					key={card.id}
					onClick={() => handleClick(card.id)}
					className={
						card.id === setImage
							? styles.flashCardParagraph
							: styles.flashCardImg
					}
				>
					{card.id === setImage ? (
						<p>{card.paragraph}</p>
					) : (
						<img src={card.image} alt="" />
					)}
				</div>
			))}
		</div>
	);
};

export default FlashCard;
