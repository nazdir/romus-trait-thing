import React, { useState, useEffect } from 'react';
import { Grid, Stepper, Step, StepLabel } from '@material-ui/core';
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
      <Stepper activeStep={step}>
        {steps.map((s) => (
          <Step onClick={() => setPage(s)}>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <hr style={{ margin: '3rem' }} />
      <Grid container justify="center">
        <div>{page === 'Import' && <Upload />}</div>
        <div>{page === 'Create Pricing Rules' && <Modify />}</div>
        <div>{page === 'Verify' && <Verify />}</div>
      </Grid>
    </>
  );
}
