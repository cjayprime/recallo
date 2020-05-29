import { Component } from "react";
import { withSnackbar } from "notistack";

class AlertDialog extends Component {
  displayed = [];

  componentDidMount() {
    this.displayed = [];
  }

  componentDidUpdate() {
    this.showAlert();
  }

  storeDisplayed = (id) => {
    this.displayed = [...this.displayed, id];
  };

  showAlert = () => {
    const { open, message, success, enqueueSnackbar } = this.props;

    if (open && message) {
      enqueueSnackbar(message, {
        variant: success ? "success" : "error",
        autoHideDuration: 3000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
        // persist: true
      });

      // Show the alert then remove it
      this.closeAlert();
    }
  };

  closeAlert() {
    const { showRequestFeedBack } = this.props;
    showRequestFeedBack({});
  }

  render() {
    /*
          The props `id={(Date.now())}` is USELESS except you want React to update
          and permit new messages to show, without props like the USEFUL `props.open`, `props.message` and `props.status`
        */
    return null;
  }
}

export default withSnackbar(AlertDialog);
