import dataForAvengers from "../DataForAvengers";
import styles from "./index.module.scss";

const FlashCard = () => {
	return <div className={styles.hero}>hello</div>;
};

export default FlashCard;

////////////////////
// const UserCard = () => {
//   // const [isShow, setIsToogle] = (useState = false);
//   return (
//     <div className={styles.hero}>
//       {dataForUsers.map((card) => (
//         <div key={card.id} className={styles.flipCard}>
//           <div className={styles.flipCardInner}>
//             <div className={styles.flipCardFront}>
//               <Image
//                 className={styles.picture}
//                 key={card?.id}
//                 src={card.image}
//                 alt='card'
//                 width={450}
//                 height={500}
//                 quality={80}
//               />
//             </div>
//             <div className={styles.flipCardBack}>
//               <UserData card={card} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
