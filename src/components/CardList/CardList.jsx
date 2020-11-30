import React from 'react';
import styles from './CardList.module.css';
import Card from '../Card/Card';

const CardList = (props) => {
  return (
    <div className={styles.CardList}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
