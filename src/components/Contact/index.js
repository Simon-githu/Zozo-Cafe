import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { modalState } from '../../features/modal/modalSlice';
import { closeModal } from '../../features/modal/modalSlice'
import {AiFillMobile} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

 const  Contact =()=> {
 
  const state = useSelector(modalState);
  const dispatch = useDispatch();
 
  const handleClose = () => {
    dispatch(closeModal())
  
  };

  return (
    <div>
    
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={state} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{color:"red",fontWeight:"bold"}} >
         ZOZO CAFE ORDER
        </DialogTitle>
        <DialogContent dividers style={{background:"#ffc500"}}>
          <Typography gutterBottom>
           Hi,thank you for visiting our site hope you like what you see.This site has not yet been developed to 
           make online ordering and payment,we are still using what we call the old way ordering method which is 
           is simple and straight forward there are whatsapp and phone call contacts below with icons and to
             make it easier for you to notice.Please dial or whatsapp the numbers to make an order of what 
             you saw and would like to taste on this site.Thank you  
          </Typography>
        
        
        </DialogContent>
        <DialogActions>
        <AiFillMobile color="green" style={{fontSize:"50px"}}/>
        <h1 style={{marginRight:"65px"}}>081 023 0124</h1>
        <IoLogoWhatsapp color="green" style={{fontSize:"50px"}}/>
        <h1>075 205 3698</h1>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Contact