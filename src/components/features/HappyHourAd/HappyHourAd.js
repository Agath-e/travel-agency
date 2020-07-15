import React from 'react';
import styles from './HappyHourAd.scss';
import {formatTime} from '../../../utils/formatTime';
import {getCountdownTime} from '../../../utils/getCountdownTime';


class HappyHourAd extends React.Component {
  constructor(){
    super();
  
    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  

  render(){
    
    const openHappyHour = getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Happy Hour</h3>
        <div className={styles.promoDescription}>{openHappyHour > 82800 ? 'It`s your time! Take advantage of Happy Hour! All offers 20% off!' : formatTime(openHappyHour) }</div>
      </div>
    );
  }

}

export default HappyHourAd;