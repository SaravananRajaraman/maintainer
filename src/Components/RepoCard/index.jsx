import React from 'react';
import {Card,CardContent,Typography,Divider,Tooltip,Chip,Snackbar,Badge,Link} from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PersonIcon from '@material-ui/icons/Person';
import LinkIcon from '@material-ui/icons/Link';
import {StyledHeader,StyledBox,IconBox} from  './RepoCard.css';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MuiAlert from '@material-ui/lab/Alert';
import AppsIcon from '@material-ui/icons/Apps';
import PagesIcon from '@material-ui/icons/Pages';
import ExtensionIcon from '@material-ui/icons/Extension';
import Skeleton from '@material-ui/lab/Skeleton';

const Types = ['Component','Module','Application'];

export const RepoSkeleton = () => {return(

            <React.Fragment>
                <Card elevation={6}>
                <StyledHeader 
                            avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
                            title={<Skeleton animation="wave" height={30} width="80%" />}
                            />                           
                <CardContent>
                    <StyledBox>
                        <IconBox>
                            <LinkIcon/>                    
                            <Typography variant={'caption'}  >
                                Link
                            </Typography>
                        </IconBox>
                        <Skeleton animation="wave" height={30} width={180} />                                              
                    </StyledBox>     
                    <Divider  />
                    <StyledBox margin>
                        <IconBox>
                            <PersonIcon/>                    
                            <Typography variant={'caption'}  >
                                Owner
                            </Typography>
                        </IconBox>                        
                        <div >
                            {[0,1].map(name=>                                                                  
                                        <Chip key={name} style={{padding:'4px', margin : '4px'}} 
                                        icon={<Skeleton animation="wave" variant="circle" width={20} height={20}/>}                                         
                                        label={<Skeleton animation="wave" height={20} width={80}/>} variant="outlined"/>                                                                   
                            )}                            
                        </div>
                    </StyledBox>    
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <PersonIcon/>                    
                            <Typography variant={'caption'}  >
                                Reviewer
                            </Typography>
                        </IconBox>                                                
                        <div >
                            {[0,1].map(name=>                                                                  
                                        <Chip key={name} style={{padding:'4px', margin : '4px'}} 
                                        icon={<Skeleton animation="wave" variant="circle" width={20} height={20}/>}                                         
                                        label={<Skeleton animation="wave" height={20} width={80}/>} variant="outlined"/>                                                                
                            )} 
                        </div>
                    </StyledBox>   
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <FolderSpecialIcon/>                    
                            <Typography variant={'caption'}  >
                                Repo Type
                            </Typography>
                        </IconBox>                        
                        <div >                        
                            <StyledBox>                                           
                                    <Skeleton animation="wave" variant="circle" width={30} height={30}/>                
                                    <Skeleton animation="wave" height={30} width={100} style={{marginLeft : '4px'}}/>
                            </StyledBox>                                                                                       
                        </div>
                    </StyledBox>  
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <AccountTreeIcon/>                    
                            <Typography variant={'caption'}  >                                
                                Dependency
                            </Typography>
                        </IconBox>                        
                        <div >
                            {[0,1].map(dependency =>                                
                                    <Badge key={dependency} color="secondary" badgeContent={''} style={{margin : '15px'}}>
                                        <Skeleton animation="wave" height={30} width={100}/>
                                    </Badge>                                                                                         
                            )}                        
                        </div>
                    </StyledBox>                                                                                  
                </CardContent>                
            </Card>            
        </React.Fragment>
)}           

function getIcon(name){
        let index = Types.indexOf(name);
        if(index === 0){
            return <ExtensionIcon color={'action'}/>
        }
        else if(index === 1){
            return <PagesIcon color={'action'}/>
        }
        else{
            return <AppsIcon color={'action'}/>
        }

}

const copyToClipboard = str => {
                const el = document.createElement('textarea');
                el.value = str;
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
              };            

export default function RepoCard({Repo}){

    const [open, setOpen] = React.useState(false);

    const handleClick = () => setOpen(!open);    
  
    const copyText = (str) => {copyToClipboard(str); handleClick();};

    return(
        <React.Fragment >
             <Card elevation={6} data-test='RepoCard-Component'>
                <StyledHeader title={Repo.name} 
                            avatar={<FolderOpenIcon size='medium'/>}
                            titleTypographyProps = {{variant : 'h6'}}                
                />                        
                <CardContent>
                    <StyledBox>
                        <IconBox>
                            <LinkIcon/>                    
                            <Typography variant={'caption'}  >
                                Link
                            </Typography>
                        </IconBox>
                        <Link href={Repo.link} target="_blank" rel="noopener">
                            {Repo.link}
                        </Link>                                                
                    </StyledBox>     
                    <Divider  />
                    <StyledBox margin>
                        <IconBox>
                            <PersonIcon/>                    
                            <Typography variant={'caption'}  >
                                Owner
                            </Typography>
                        </IconBox>                        
                        <div >
                            {Repo.owner.map(name=>                              
                                    <Tooltip key={name.id} title={name.emailId}>
                                        <Chip style={{padding:'4px', margin : '4px'}} 
                                        data-test={`owner-${name.id}`}
                                        icon={<PersonIcon/> } 
                                        onClick={()=>copyText(name.emailId)} 
                                        label={name.name} variant="outlined"/>                            
                                    </Tooltip>    
                            )}                            
                        </div>
                    </StyledBox>    
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <PersonIcon/>                    
                            <Typography variant={'caption'}  >
                                Reviewer
                            </Typography>
                        </IconBox>                                                
                        <div >
                            {Repo.reviewer.map(name=>                              
                                    <Tooltip key={name.id} title={name.emailId}>
                                        <Chip style={{padding:'4px', margin : '4px'}} 
                                        data-test={`reviewer-${name.id}`}
                                        icon={<PersonIcon/> } 
                                        onClick={()=>copyText(name.emailId)} 
                                        label={name.name} variant="outlined"/>                                                                    
                                    </Tooltip>    
                            )}
                        </div>
                    </StyledBox>   
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <FolderSpecialIcon/>                    
                            <Typography variant={'caption'}  >
                                Repo Type
                            </Typography>
                        </IconBox>                        
                        <div >
                        {Repo.repoType && 
                            <StyledBox>                                           
                                    {getIcon(Repo.repoType)}                
                                    <Typography style={{marginLeft : '4px'}} variant={'h6'} color={'textSecondary'}>{Repo.repoType}</Typography>                                                                    
                            </StyledBox>
                        }                                                                 
                        </div>
                    </StyledBox>  
                    <Divider />
                    <StyledBox margin>
                        <IconBox>
                            <AccountTreeIcon/>                    
                            <Typography variant={'caption'}  >                                
                                Dependency
                            </Typography>
                        </IconBox>                        
                        <div >
                            {Repo.dependency.map(dependency =>                                
                                    <Badge key={dependency.package} color="secondary" badgeContent={dependency.version} style={{margin : '15px'}}>
                                        <Typography variant={'h6'} color={'textSecondary'}>{dependency.package}</Typography>
                                    </Badge>                                                                                         
                            )}                        
                        </div>
                    </StyledBox>  
                    <Snackbar open={open} data-test={'SnackBar'} autoHideDuration={1000} onClose={handleClick}>
                            <MuiAlert elevation={6} variant="filled" onClose={handleClick} severity="success">
                                Email copied to clipboard
                            </MuiAlert>
                    </Snackbar>                                                             
                </CardContent>                
            </Card>            
        </React.Fragment>
    )
}