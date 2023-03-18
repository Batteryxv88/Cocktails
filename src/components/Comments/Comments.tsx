import styles from './comments.module.css';
import Comment from './Comment/Comment';
import { CommentType } from '../../state/cocktailsArr';
import { useState } from 'react'

interface CommentProps {
  comment: CommentType[];
}

const Comments = (props: CommentProps) => {

  const [val, setVal] = useState()
  console.log(val)

  const setInputHandler = (evt: any) => {
    setVal(evt.target.value)
  }

  return (
    <div className={styles.comments}>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Комментарии:</h4>
        <button className={styles.all}>Все комментарии</button>
      </div>
      {props.comment.length !== 0
        ? props.comment.map((item) => (
            <Comment
              id={item.id}
              author={item.author}
              comment={item.comment}
              date={item.date}
              icon={item.icon}
              key={item.id}
            />
          ))
        : []}
      <form className={styles.form}>
        <textarea onChange={setInputHandler} className={styles.input}></textarea>
        <button className={styles.send}>Отправить</button>
      </form>
    </div>
  );
};

export default Comments;
