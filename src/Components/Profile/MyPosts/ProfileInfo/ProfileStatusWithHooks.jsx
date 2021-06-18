import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    return (

        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    )
        ;

}

export default ProfileStatusWithHooks;