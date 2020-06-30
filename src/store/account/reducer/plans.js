import * as Actions from "../actions";

function plans(state, action) {
  const { data, status, type } = action;
  var newState = {
    ...state
  };

  if (
    status === true
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
      
    }else if(type === Actions.DID){

      newState = {
        ...newState,
        payment: {
          ...newState.payment,
          dids: data.dids
        }
      };
      
    }

    return newState;
  }

  return newState;
}
export default plans;
