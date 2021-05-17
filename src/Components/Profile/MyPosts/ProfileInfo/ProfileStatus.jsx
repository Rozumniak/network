import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        localStatus: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.localStatus);
    }

    updateText = (e) => {
        this.setState({
            localStatus: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                localStatus: this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.updateText}
                           value={this.state.localStatus}/>
                </div>
                }
            </div>
        )
            ;
    }
}

export default ProfileStatus;