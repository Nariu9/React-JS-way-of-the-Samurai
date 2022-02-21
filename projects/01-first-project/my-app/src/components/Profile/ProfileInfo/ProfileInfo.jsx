import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2022/01/08/19/13/animal-6924664_960_720.jpg" alt="background_image" />
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" />
                <div>Description</div>
            </div>
        </div>);
}

export default ProfileInfo;