import { makeStyles } from "@material-ui/core/styles";
const drawerWidth=0;
export default makeStyles((theme)=>
({
    root:{
        maxWidth:'100%'
    },
    media:{
        height:0,
        paddingTop : '56.25%'        
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    },
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },
      image: {
        marginRight: '10px',
      },
      grow: {
        flexGrow: 1,
      },
      button: {
        display: 'flex',
        justifyContent: 'flex-end',
      }
}))