import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, email },
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you {firstName}</h1>
          <br />
          <p>
            we will get back to you on your mail{' '}
            <span style={{ color: 'red' }}> {email} </span>
            with further instructions
          </p>
          {/* <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            secondary={true}
            style={styles.button}
            onClick={this.back}
          /> */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15,
//   },
// };

export default Success;
