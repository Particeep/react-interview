import { AppBar, Toolbar, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: 'rgb(45,45,45)'}}>
                <MovieIcon fontSize="large" color='secondary' />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1 }}>
                    Movies
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;