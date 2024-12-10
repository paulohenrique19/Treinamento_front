import styles from './Post.module.css';
import Comment  from './Comment.tsx';
import Avatar from './Avatar.tsx';

import { PostProps } from './interfaces/Post.ts'

// Libs para datas
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from 'react';



// usando desestruturação para não ficar repetindo props.(nome do obj)
const Post = ({author, publishedAt, content}: PostProps) => {

    const [comments, setComments] = useState([
        'Teste comentário'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event?.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event?.target.value);
    }

    function deleteComment(comment) {

    }



  return (
    <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* Passando só a propriedade sem valor ex: "hasBorder", o react entende como um boolean com valor true */}
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph')
                    {
                        return <p key={line.content}>{line.content}</p>
                    }
                    if (line.type === 'link')
                    {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return ( <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>

        </article>
    </div>
  )
}

export default Post