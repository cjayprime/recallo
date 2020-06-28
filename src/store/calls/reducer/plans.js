import * as Actions from "../actions";

function plans(state, action) {
  const { data, loading, message, status, type } = action;
  var newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading),
  };

  if (
    status === true &&
    (
      type === Actions.ADDPAYMENT ||
      type === Actions.PAYMENTPLAN ||
      type === Actions.DID
    )
  ) {
    if(type === Actions.ADDPAYMENT){

      newState = {
        ...newState,
        business: {
          ...newState.business,
          email: data.email
        },
        payment: {
          ...newState.payment,
          reference: data.ref,
          publickey: data.p_key,
          amount: data.amount
        }
      };

    }else if(type === Actions.PAYMENTPLAN){

      newState = {
        ...newState,
        payment: {
          ...newState.payment,
          plans: data.plans
        }
      };
      
    }else{

      newState = {
        ...newState,
        payment: {
          ...newState.payment,
          dids: data.dids
        }
      };
      
    }

    return newState
  }else if(
    status === false &&
    (
      type === Actions.ADDPAYMENT ||
      type === Actions.PAYMENTPLAN ||
      type === Actions.DID
    )
  ){
    return {
      ...state,
      loading: state.loading.filter((text) => text !== loading),
      status: false,
      message,
    };
  }

  return null;
}
export default plans;
