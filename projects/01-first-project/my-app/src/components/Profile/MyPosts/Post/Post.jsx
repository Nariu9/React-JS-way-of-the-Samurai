import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://vuesax.com/avatars/avatar-3.png" alt="user_avatar" />
            { props.message }
            <div>
                <span>{ props.likeCounter }</span>
            </div>
        </div>
    );
}

export default Post;