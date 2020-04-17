import CardHeader from '@material-ui/core/CardHeader';
import styled from 'styled-components';

export const StyledHeader = styled(CardHeader)`
    &&{
        padding-top : 2px;
        padding-bottom : 2px;
        background-image: linear-gradient(to right, #314755 0%, #26a0da 100%);
        // background-image: linear-gradient(to right, #003973 0%, #E5E5BE 100%);
        color : #fff;
        font-size : 34px;        
    }`   

export const StyledBox = styled('div')`
        align-items : center;
        display : flex;      
        margin-top : ${props => props.margin ? '10px' : '0'};
`
export const IconBox = styled('div')`
        display: inline-grid;
        justify-items: center; 
        width: 100px;    
`