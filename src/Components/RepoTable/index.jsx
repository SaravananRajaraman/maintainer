import React from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StyledBox = styled('div')({
  padding : '20px'
});

const StyledButton = styled(Button)`
      &&{
        margin-bottom : 20px;
        float : right;
      }
`
const getRepoData = (array) => {  
    let packages = [];
    let Repo = [];  
    array.forEach( value => value.dependency.forEach(dep => packages.push(dep.package)));
    packages = packages.filter((value,index) => packages.indexOf(value) === index);
    array.forEach(element => {
      let repo = { name : element.name};    
      packages.forEach(Package => {
            let dependency = element.dependency.filter(value => value.package === Package);          
            repo[Package] = dependency.length > 0 ? dependency[0].version : '';
      })
      Repo.push(repo);
    });
    return {Repo,packages};    
  };


function RepoTable(props) {
        const RepoData = getRepoData(props.Repos);
  return (
    <StyledBox data-test='RepoTable-Component'>
      <StyledButton href='#' startIcon={<ArrowBackIcon />}>Back</StyledButton>          
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
            <TableCell style={{minWidth : '80px'}}>NAME</TableCell>
              {RepoData.packages.map(name => <TableCell style={{minWidth : '80px'}} key={name}>{name.toUpperCase()}</TableCell>)}            
            </TableRow>
          </TableHead>
          <TableBody>
            {RepoData.Repo.map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{minWidth : '80px'}} component="th" scope="row">
                  {row.name}
                </TableCell>
                {RepoData.packages.map(name=> <TableCell key={name} align={'center'} style={{minWidth : '80px'}}>{row[name]}</TableCell>)}            
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
}


const mapStatesToProps = state => {
    return {
       Repos : state.home.Repos       
    } 
};

export default connect(mapStatesToProps)(RepoTable);