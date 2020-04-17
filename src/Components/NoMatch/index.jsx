import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledBox = styled('div')({
    display : 'grid',
    alignItems : 'center',
    justifyItems : 'center',
    height : '100vh'
})

export default function NoMatch() {
  return (
    <StyledBox>
        <div>
            <Typography variant='h1' >{'404'}</Typography>
            <Typography variant='h6' >{'Page not found!'}</Typography>
        </div>        
    </StyledBox>
  );
};