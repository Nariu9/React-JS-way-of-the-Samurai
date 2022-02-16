import s from './Post.module.css';

const Post = () => {
    return (

        <div className={s.item}>
            <img src="https://vuesax.com/avatars/avatar-3.png" alt="user_avatar" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;