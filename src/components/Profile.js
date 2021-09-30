import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import './Profile.css';
import { updateUserData } from '../services/firebase.service';

const Profile = (props) => {
    const [open, setOpen] = React.useState(false);

    const updateName = (e) => {
        props.setUser({ ...props.user, displayName: e.target.value });
    }

    const handleSubmit = () => {
        updateUserData(props.user).then(() => {
            setOpen(true);
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

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
                            <div className="profile-info-item">Name: {props.user.displayName}</div>
                            <div className="profile-info-item">Date Joined: {props.user.metadata.creationTime}</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className="text-fields">
                        {props.user.displayName ? (<>
                            <TextField
                                className="text-field-input"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={props.user.displayName}
                                onChange={updateName} />
                        </>) : (<></>)}

                    </CardContent>
                    <CardActions className="card-actions">
                        <Button size="small" variant="contained" onClick={handleSubmit}>Save</Button>
                    </CardActions>
                </Card>
            </Container>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action} />
        </div>
    );
}

export default Profile;