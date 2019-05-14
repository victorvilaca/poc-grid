import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReactBootstrapTable2 from './ReactBootstrapTable2';
import ReactTabulator from './ReactTabulator';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});


class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="react-bootstrap-table2" />
            <Tab label="react-tabulator" />
            <Tab label="Grid 3" />
            <Tab label="Grid 4" />
          </Tabs>
        </AppBar>
        {value === 0 && <ReactBootstrapTable2 />}
        {value === 1 && <ReactTabulator />}
        {value === 2 && <TabContainer>Grid 3</TabContainer>}
        {value === 3 && <TabContainer>Grid 4</TabContainer>}
        
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);