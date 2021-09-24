import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="page-content">
            <Container maxWidth="lg">
                <Card sx={{ minWidth: 275 }} style={{marginBottom: '20px'}}>
                    <CardContent style={{ display: 'flex' }}>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: 200, height: 200 }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9xxbYphZGp1R9Hw3rImD5fp08vV2YDxyUQ&usqp=CAU" />
                        <div className="profile-info">
                            <div className="profile-info-item">Name: Jacob Plumb</div>
                            <div className="profile-info-item">Age: 30</div>
                            <div className="profile-info-item">Date Joined: 10/27/2019</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className="text-fields">
                        <TextField className="text-field-input" id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField className="text-field-input" id="outlined-basic" label="Outlined" variant="outlined" />
                    </CardContent>
                    <CardActions className="card-actions">
                        <Button size="small" variant="contained">Save</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    );
}

export default Profile;