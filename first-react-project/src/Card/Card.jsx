import profile from '../assets/profile.jpg';
import styles from './Card.module.css';
function Card({name,desc,age,isStuff}){
    return (
        <div className={isStuff?styles.card:styles.card2}>
            <img className={styles.img} src={profile} alt="Profile"  />
        <h2>{name}</h2>
        <h2>{desc}</h2>
        <h2>{isStuff?"Yes":"No"}</h2>
        <h2>{age}</h2>
        <p>This is a simple card component.</p>
        </div>
    );
}
export default Card;