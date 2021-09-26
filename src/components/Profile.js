import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import './Profile.css';
import { useEffect, useState } from 'react';
import { store } from '../reducer';
import { userUpdatedAction } from '../actions/shared.actions';
import { connect } from 'react-redux';

const Profile = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        store.subscribe(() => {
            console.log('subscribe ran');
        })
    }, [])

    const updateName = (e) => {
        props.setUser({...props.user, displayName: e.target.value});
        setIsUpdating(true);
    }

    const updateAge = (e) => {
        props.setUser({...props.user, age: e.target.value});
        setIsUpdating(true);
    }

    const handleUpdate = () => {
        props.userUpdatedAction(props.user);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    return (
        <div className="page-content">
            <Container maxWidth="lg">
                <Card sx={{ minWidth: 275 }} style={{ marginBottom: '20px' }}>
                    <CardContent style={{ display: 'flex' }}>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: 200, height: 200 }}
                            src={props.user.photoUrl} />
                        <div className="profile-info">
                            <div className="profile-info-item">Name: {props.user.displayName}</div>
                            <div className="profile-info-item">Age: {props.user.age}</div>
                            <div className="profile-info-item">Date Joined: {props.user.metadata.creationTime}</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className="text-fields">
                        {props.user ? (<>
                            <TextField
                                className="text-field-input"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={props.user.displayName}
                                onChange={updateName} />
                            <TextField
                                className="text-field-input"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={props.user.hasOwnProperty('age') ? props.user.age : 0}
                                onChange={updateAge} />
                        </>) : (<></>)}

                    </CardContent>
                    <CardActions className="card-actions">
                        <Button disabled={!isUpdating} size="small" variant="contained" onClick={handleUpdate}>Save</Button>
                    </CardActions>
                </Card>
                {showAlert ? <Alert className="alert" severity="success">This is a success alert — check it out!</Alert> : null}
                
            </Container>
        </div>
    );
}

export default connect(null, { userUpdatedAction })(Profile);