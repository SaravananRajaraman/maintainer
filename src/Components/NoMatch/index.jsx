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
    <StyledBox data-test='NoMatch-Component'>
        <div>
            <Typography variant='h1' data-test='Error'>{'404'}</Typography>
            <Typography variant='h6' data-test='Description'>{'Page not found!'}</Typography>
        </div>        
    </StyledBox>
  );
};