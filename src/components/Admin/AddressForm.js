import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="name"
            label="First name"
            fullWidth
            onKeyUp={e => {
              localStorage.setItem('name', e.target.value);
              console.log(e.target.value);
            }}
            autoComplete="fname"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="EMail"
            name="Email"
            label="Email"
            fullWidth
            onKeyUp={e => {
              localStorage.setItem('email', e.target.value);
              console.log(e.target.value);
            }}
            autoComplete="email"
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            fullWidth
            onKeyUp={e => {
              localStorage.setItem('password', e.target.value);
              console.log(e.target.value);
            }}
            autoComplete="fname"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onKeyUp={e => {
              localStorage.setItem('lastname', e.target.value);
              console.log(e.target.value);
            }}
            autoComplete="lname"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}