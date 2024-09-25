import { FaLinkedin } from 'react-icons/fa';
import styles from './ReferalsCard.module.css';

export default function ReferalsCard(props) {
  return (
    <div
      className={styles.referal}
      style={{
        maxWidth: '320px',
        background: props.background,
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px 10px',
        padding: '32px',
      }}
    >
      <img
        style={{ width: '40px', marginBottom: '20px' }}
        alt="quotes"
        src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Quote_Bob-Meijer_RGB.png"
      />
      <p className={styles.rfaParagraph}>{props.rfaParagraph}</p>
      <div
        style={{
          width: '79px',
          height: '79px',
          background: 'pink',
          border: '5px, solid white',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          marginTop: '15px',
        }}
      >
        <img
          alt="referal-person"
          src={props.thumbnail}
          style={{ width: '79px', borderRadius: '50%' }}
        />
      </div>
      <p
        style={{
          fontWeight: '600',
          marginTop: '25px',
          marginBottom: '0px',
        }}
        className={styles.rfaParagraph}
      >
        <a style={{ cursor: 'pointer' }}>{props.name}</a>
        <FaLinkedin style={{ marginLeft: '5px', marginBottom: '-2px' }} />
      </p>
      <p className={styles.rfaParagraph}>{props.position}</p>
    </div>
  );
}
