import {React, useState} from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import './Card.css';
import axios from 'axios';
import FolderList from './List';

const Card = () => {
	const [find, setFind] = useState({
		lng: "",
		lat: ""
	});
    const [ninjas, setNinja] = useState({});
	const { lng, lat } = find;
	const onInputChange = e => {
		setFind({...find,[e.target.name]: e.target.value})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		const result = await axios.get(`http://localhost:8080/api/ninjas/?lng=${lng}&lat=${lat}`);
        console.log(result.data);
		setNinja(result.data);
	}
    return (
        <>
        <Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ margin: '2rem'}}
			xs={12}
			spacing={1}
		>	
		<Grid item spacing={1}>
			<Typography variant="h4" color="textSecondary">Find a Ninja now!</Typography>
		</Grid>	
		
		<form autoComplete="off" onSubmit={e => onSubmit(e)}>
			<Grid item spacing={9}>
				<TextField 
					style={{width: '100vh', margin: '1rem'}} 
					id="lng" 
					name="lng"
                    value={lng}
					label="Longitude" 
                    onChange={e => onInputChange(e)}
				/>
			</Grid>
			<Grid item spacing={9}>
				<TextField
					id="lat"
					style={{width: '100vh', margin: '1rem'}}
					label="Latitude"
                    value={lat}
					name="lat"
                    onChange={e => onInputChange(e)}
				/>
			</Grid>
			<Grid item spacing={10} >
				<Button style={{margin: '0 auto', display: "flex"}} variant="outlined" color="primary" size="large" type="submit">
					Find
				</Button>
			</Grid>
		</form>	
		</Grid>
        {/* {Object.keys(ninjas).length !== 0 && <FolderList ninjas = {ninjas}/>} */}
        <FolderList ninjas = {ninjas}/>
        </>
    )
}

export default Card;
