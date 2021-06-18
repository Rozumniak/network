import React from 'react';
import preloader from '../../../../img/Curve-Loading.gif';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../../img/1.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                    className={s.largeUserPhoto}/>
                <ProfileStatusWithHooks id={props.id} status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.discriptionBlock}>

                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;