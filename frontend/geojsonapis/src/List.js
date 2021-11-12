import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function FolderList({ ninjas }) {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ margin: '2rem' }}
            xs={12}
            spacing={1}
        >   
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {ninjas.map((ninja) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: ninja.available ? "#24c70e" : "#c72d0e"}}/>
                        </ListItemAvatar>
                        <ListItemText primary={ninja.name} secondary={ninja.rank} /> 
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
}