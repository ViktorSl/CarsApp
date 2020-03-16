import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';

const Input = props => {
  const { label, id, type, changed, adorment,fileName, style, value } = props;

  let input;
  if (type !== 'file') {
    input = (
      <Grid item>
        <TextField
          label={label}
          id={id}
          type={type}
          style={style}
          value={value}
          InputProps={{endAdornment:<InputAdornment position="end">{adorment}</InputAdornment>}}
          onChange={changed}
        ></TextField>
      </Grid>
    );
  } else {
    input = (
      <Grid
        item
        style={{ width: '20em', marginTop: '5px'}}

      >
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type={type}
          value={value}
          onChange={changed}
        />
        <label htmlFor="raised-button-file">
          <Button
            component="span"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            {fileName || 'Фото'}
          </Button>
        </label>
      </Grid>
    );
  }

  return input;
};

export default Input;
