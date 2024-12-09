import styles from './Post.module.css';
import Comment  from './Comment.tsx';

const Post = () => {
  return (
    <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <div className={styles.authorInfo}>
                        <strong>User 1</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="09/12/24 13:00" dateTime="2024-09-12 13:00:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Teste postagem</p>
                <p><a href="">Teste link</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    </div>
  )
}

export default Post