import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Profile.css';
import { updateUserData } from '../services/user.service';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserDataAction, updateAgeAction, updateNameAction } from '../actions/user.actions';

const Profile = (props) => {
    const [gotProfileData, setGotProfileData] = useState(false);

    useEffect(() => {
        if (!gotProfileData) {
            props.getUserDataAction();
            setGotProfileData(true);
        }
    })

    return (
        <div className="page-content">
            <Container maxWidth="lg">
                <Card sx={{ minWidth: 275 }} style={{ marginBottom: '20px' }}>
                    <CardContent style={{ display: 'flex' }}>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: 200, height: 200 }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9xxbYphZGp1R9Hw3rImD5fp08vV2YDxyUQ&usqp=CAU" />
                        <div className="profile-info">
                            <div className="profile-info-item">Name: {props.fullName}</div>
                            <div className="profile-info-item">Age: {props.age}</div>
                            <div className="profile-info-item">Date Joined: {props.signedUp}</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className="text-fields">
                        {props.fullName ? (<>
                            <TextField
                                className="text-field-input"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={props.fullName}
                                onChange={(e) => props.updateNameAction(e.target.value)} />
                            <TextField
                                className="text-field-input"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={props.age}
                                onChange={(e) => props.updateAgeAction(e.target.value)} />
                        </>) : (<></>)}

                    </CardContent>
                    <CardActions className="card-actions">
                        <Button size="small" variant="contained" onClick={() => updateUserData({fullName: props.fullName, age: props.age, signedUp: props.signedUp})}>Save</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        fullName: state.user.fullName,
        age: state.user.age,
        signedUp: state.user.signedUp
    }
}

export default connect(mapStateToProps, { getUserDataAction, updateNameAction, updateAgeAction })(Profile);