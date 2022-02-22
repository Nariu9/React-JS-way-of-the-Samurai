import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: "Hi, how are you ?", likeCounter: 12},
        {id: 2, message: "It's my first post", likeCounter: 20},
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button type='submit'>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCounter={postsData[0].likeCounter}/>
                <Post message={postsData[1].message} likeCounter={postsData[1].likeCounter}/>
            </div>
        </div>);
}

export default MyPosts;