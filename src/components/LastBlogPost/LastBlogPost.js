import React from "react";
import handPath from "../../../static/images/Bitmap.png";
import styles from "./LastBlogPost.module.scss";

const LastBlogPost = () => {
  return (
    <section className={styles.LastBlogPost}>
      <img className={styles.LastBlogPost__img} src={handPath} alt="hand" />
      <div className={styles.LastBlogPost__text}>
        <span className={styles.LastBlogPost__subtitle}>Recent blog post</span>
        <h2 className={styles.LastBlogPost__title}>
          There's a new Player in the Town - meet the MVMT
        </h2>
      </div>
    </section>
  );
};

export default LastBlogPost;
