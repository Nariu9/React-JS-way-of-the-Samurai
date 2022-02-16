import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button type='submit'>Add post</button>
            </div>
            <div className={s.posts}>
               <Post message='Hi, how are you ?' likeCounter='15 '/>
               <Post message="It's my first post" likeCounter='20 '/>
            </div>
        </div>
    );
}

export default MyPosts;