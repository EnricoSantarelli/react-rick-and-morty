"use client";
import Carousel from "../components/carousel";
import styles from "./characters.module.scss";

export default function CharactersPage() {
  return (
    <div>
      <div className={styles.characters__header}>
        <h1 className={styles.characters__title}>Characters</h1>
      </div>
      <Carousel />
    </div>
  );
}
