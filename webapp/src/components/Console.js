import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const ContainerStyled = withStyles({
  root: {
    backgroundColor: "#1f4068",
    fontFamily: "monospace",
    flexBasis: "50%",
    overflow: "auto",
    flexWrap: "nowrap"
  }
})(Grid);

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  add(msg, timeStamp = true) {
    let newMsg = document.createElement('div');
    newMsg.innerText = (timeStamp ? new Date().toLocaleTimeString() + "|" + msg : msg);
    this.ref.current.appendChild(newMsg);
    newMsg.scrollIntoView();
  }

  render() {
    return (
        <ContainerStyled direction="column" container item ref={this.ref} data-testid="console">
          <Grid item >DeepDream Maker ready... </Grid>
        </ContainerStyled>
    );
  }
}
export default Console;