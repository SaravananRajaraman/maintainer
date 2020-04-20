import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledHeader = styled(AppBar)`    
        background-image: linear-gradient(#314755 0%, #26a0da 51%, #314755 100%);         
        align-items : center;   
    `   

export default function Header() {  

  return (    
      <StyledHeader data-test='Header-Component' position="static">
        <Toolbar variant="dense">                     
            <Typography data-test='Title' variant="h6" color="inherit">
                Maintainers Info
            </Typography>
        </Toolbar>
      </StyledHeader>    
  );
}
