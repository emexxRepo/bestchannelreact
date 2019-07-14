import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Social Information
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="facebook"
            name="Facebook"
            label="Facebook"
            fullWidth
            autoComplete="facebook"
            onKeyUp={
              e => {
                localStorage.setItem('facebook',e.target.value);
                console.log(e.target.value);
              }
            }
         />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="twitter"
            name="Twitter"
            label="Twitter"
            fullWidth
            onKeyUp={
              e => {
                localStorage.setItem('twitter',e.target.value);
                console.log(e.target.value);
              }
            }
            autoComplete="twitter"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="youtube"
            name="Youtube"
            label="Youtube"
            fullWidth
            onKeyUp={
              e => {
                localStorage.setItem('youtube',e.target.value);
                console.log(e.target.value);
              }
            }
            autoComplete="youtube"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="instagram"
            name="instagram"
            label="instagram"
            fullWidth
            onKeyUp={
              e => {
                localStorage.setItem('instagram',e.target.value);
                console.log(e.target.value);
              }
            }
            autoComplete="instagram"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}