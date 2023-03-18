import styles from './comment.module.css';
import { CommentsArr } from '../../../state/commentsArr';
import { CommentType } from '../../../state/cocktailsArr';

interface CommentProps {
  id: number;
  author: string;
  date: Date;
  comment: string;
  icon: string;
}

const Comment = (props: CommentProps) => {
  return (
    <div className={styles.commentBox}>
      <div className={styles.box}>
        <img className={styles.img} src={props.icon} ></img>
        <div className={styles.wrapper}>
          <h4 className={styles.name}>{props.author}</h4>
          <p className={styles.date}>{props.date.toLocaleDateString()}</p>
        </div>
      </div>
      <p className={styles.comment}>{props.comment}</p>
    </div>
  );
};

export default Comment;
