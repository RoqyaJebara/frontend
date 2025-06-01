import profilePic from '../assets/profile.jpg';
import styles from './Image.module.css';
function Image(){
    return (
        <div >
            <img className={styles.image} src={profilePic} alt="Profile"  />    
        </div>
    );
}
export default Image;