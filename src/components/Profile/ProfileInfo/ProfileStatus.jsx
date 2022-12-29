import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    turnOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    turnOffEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    updateLocalStatus = (e) => {
        let value = e.currentTarget.value;
        this.setState({
            status: value
        })
    }

    render () {
        return (
            <>
                {!this.state.editMode && 
                <span className={styles.status} onDoubleClick={this.turnOnEditMode}>
                    {this.props.status || 'Here can be user status...'}
                </span>
                }
                {this.state.editMode && 
                    <input 
                    onChange={this.updateLocalStatus}
                    onBlur={this.turnOffEditMode} 
                    autoFocus type="text" 
                    value={this.state.status}/>
                }
            </>
        )
    }
}

export default ProfileStatus;