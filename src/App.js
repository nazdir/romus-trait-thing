import React, { useState, useEffect } from 'react';
import { Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { Upload } from './pages/Upload.js';
import { Verify } from './pages/Verify.js';
import { Modify } from './pages/Modify.js';
import './style.css';

const steps = ['Import', 'Create Pricing Rules', 'Verify'];

export default function App() {
  const [page, setPage] = useState('upload');
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(steps.indexOf(page));
  }, [page]);

  return (
    <>
      <div style={{ background: 'black', opacity: 0.75 }}>
        {steps.map((b) => (
          <Button color="primary" onClick={() => setPage(b)}>
            {b}
          </Button>
        ))}
      </div>

      <Stepper activeStep={step}>
        {steps.map((s) => (
          <Step>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <hr style={{ margin: '3rem' }} />
      <Grid container justify="center">
        <div>{page === 'Upload' && <Upload />}</div>
        <div>{page === 'Verify' && <Verify />}</div>
        <div>{page === 'Modify' && <Modify />}</div>
      </Grid>
    </>
  );
}
