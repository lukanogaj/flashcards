import dataForAvengers from "../DataForAvengers";
import styles from "./index.module.scss";

const FlashCard = () => {
	return (
		<div className={styles.hero}>
			{dataForAvengers.map((card) => (
				<div key={card.id} className={styles.flashCard}>
					<img src={card.image} alt="" />
				</div>
			))}
		</div>
	);
};

export default FlashCard;


