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
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
            </div>
        </div>
    );
}

export default MyPosts;