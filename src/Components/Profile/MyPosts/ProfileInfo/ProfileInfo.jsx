import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader";

import userPhoto from "../../../../img/1.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {Button, Input} from "antd";
import ProfileDataReduxForm from "./ProfileDataForm";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    const isEditMode = () => {
        if (props.editMode) {
            return props.deactivateProfileEditMode;
        }
        return props.activateProfileEditMode;
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData);
    }

    return (
        <div>
            {props.isOwner &&
            <div className={s.editProfile}>
                <Button onClick={isEditMode()}> {props.editMode ? "Cancel" : "Edit"}</Button>
            </div>
            }
            <div>
                <img
                    src={props.profile.photos.large || userPhoto}
                    className={s.largeUserPhoto}/>
                <ProfileStatusWithHooks id={props.id} status={props.status} updateStatus={props.updateStatus}
                                        isOwner={props.isOwner}/>

                {props.isOwner && props.editMode ?
                    <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} savePhoto={props.savePhoto} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile}/>
                }

            </div>
        </div>
    );
}


const ProfileData = (props) => {
    return <div className={s.discriptionBlock}>
        <div>
            <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
            <b>looking For A Job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>

    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}:</b> {contactValue}

    </div>
}

export default ProfileInfo;