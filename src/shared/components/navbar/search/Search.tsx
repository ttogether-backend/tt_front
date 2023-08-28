import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  const username = '김나영';
  return (
    <div className={styles.search_box}>
      <button className={styles.search_btn}></button>
      <input
        type="text"
        className={styles.search_input}
        placeholder={`${username}님! 오늘은 석촌호수, 어때요?`}
      />
    </div>
  );
}

export default Search