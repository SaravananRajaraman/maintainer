import React from 'react';
import {Grid,Button} from '@material-ui/core';
import RepoCard,{RepoSkeleton} from '../../Components/RepoCard';
import { connect } from "react-redux";
import styled from 'styled-components';
import TableChartIcon from '@material-ui/icons/TableChart';


const StyledBox = styled('div')({
  padding : '20px'
});

const StyledButton = styled(Button)`
      &&{
        margin-bottom : 20px;
        float : right;
      }
`

function HomePage(props){
      const {Repos,loading} = props;     
    return (
      <StyledBox data-test='HomePage-Component'>
          <StyledButton href='#/Table' startIcon={<TableChartIcon />}>View Table</StyledButton>         
          <Grid container spacing={2}>
              {loading ?
                  [0,1].map(value =>                         
                        <Grid key={value} item xs={12} sm={6} md={4}>
                            <RepoSkeleton/>
                  </Grid> ) :                    
                  Repos.map(value =>                         
                    <Grid key={value.name} item xs={12} sm={6} md={4}>
                        <RepoCard test-data='Repocard' Repo={value}/>
                    </Grid>)}
          </Grid>
      </StyledBox>
    )
};

const mapStatesToProps = state => {
     return {
        Repos : state.home.Repos,
        loading : state.home.loading        
     } 
};

export default connect(mapStatesToProps)(HomePage);