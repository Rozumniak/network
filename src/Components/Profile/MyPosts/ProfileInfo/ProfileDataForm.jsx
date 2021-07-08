import s from "./ProfileInfo.module.css";
import {Input} from "antd";
import {UploadOutlined} from '@ant-design/icons';
import React from "react";
import {createField, Textarea} from "../../../Common/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, props, profile}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={s.photoUpload}><Input icon={<UploadOutlined/>} type={"file"}
                                              onChange={onMainPhotoSelected}/></div>
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {
                }}>Save
                </button>
            </div>
            <div>
                <b>Full name:</b> {createField("Full name", "fullName", [], "input")}
            </div>
            <div>
                <b>В поисках работы:</b> {createField("", "lookingForAJob", [], "input", {type: "checkbox"})}
            </div>
            <div>
                <b>Мои навыки:</b> {createField("", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>Обо мне:</b> {createField("", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
                return <div>
                    <b>{key}:</b> {createField(key, "contacts." + key, [], "input")}
                </div>
            })}
            </div>

        </form>

    </div>
}
const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)
export default ProfileDataReduxForm