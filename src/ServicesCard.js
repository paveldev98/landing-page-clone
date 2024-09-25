import styles from './ServicesCard.module.css';

export default function ServicesCard(props) {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: props.background,
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0px 10px',
        padding: '32px',
      }}
    >
      <img
        style={{ width: '100px' }}
        alt="outsorce-google-ads"
        src={props.src}
      />
      <h3>{props.service}</h3>
      <p className={styles.srvParagraph}>{props.serviceParagraph}</p>
      <a className={styles.servicesBtn}>{props.serviceBtn}</a>
    </div>
  );
}
