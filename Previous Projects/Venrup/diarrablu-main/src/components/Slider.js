import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

function InputSlider({ val, valueSet, label,min,max,marks, track=false }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(val);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    valueSet(newValue);
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    valueSet(event.target.value === '' ? '' : Number(event.target.value))
  };

  const handleBlur = () => {
    if (value < -50) {
      setValue(-50);
    } else if (value > 50) {
      setValue(50);
    }
  };

  return (
    <div className="slider">

      {

    }
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div className="position-label">
            {label}
            </div>
        </Grid>
        <Grid item xs>
          <Slider
            color="grey"
            track={track}
            marks={marks}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
          />
        </Grid>
        <Grid item>
          <Input
            className="position-input"
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: min,
              max: max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default InputSlider
