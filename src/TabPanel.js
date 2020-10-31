import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Container} from "react-bootstrap";


export function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        //width: 500,
    },
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(props.children[0].props.title);


    //console.log(props.children[0].props.title);
//style={{paddingTop:"0em"}}  className={props.headerClass}  , indicatorColor="primary"

    const tabs = props.children!==undefined&&
        React.Children.map(props.children, (node, i) =>
            <div>
            <TabPanel value={value} index={node.props.title} dir={theme.direction}>

                {
                    node
                }

            </TabPanel>
            </div>
        );

    console.log(tabs);

    return (
        <div className={classes.root} >
            <AppBar  position="static"  style={{maxWidth: "40em", maxHeight: "inherit", margin: "auto", boxShadow: "none"}}>
                <BottomNavigation
                    value={value}

                    //textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    
                >
                    {
                        props.children!==undefined&&
                            React.Children.map(props.children, (node, i) =>
                                    <BottomNavigationAction label={node.props.title} value={node.props.title} icon={node.props.icon} onClick={()=>{setValue(node.props.title); console.log(node.props.title)}} {...a11yProps(i)}/>
                            )
                    }

                </BottomNavigation>
            </AppBar>

            <Container>
                {
                    tabs
                }
            </Container>

        </div>
    );
}
