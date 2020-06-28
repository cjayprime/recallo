import * as Actions from "../actions";

function signin(state, action) {
  const { data, status, type } = action;
  let newState = {
    ...state
  };

  if (type === Actions.SIGNIN && status === true) {
    Actions.token.set(data.token);

    const { user } = data;
    const { account } = user;
    return {
      ...newState,
      user: {
        firstname: user.first_name,
        lastname: user.last_name,
        email: user.email,
        mobile: user.mobile,
      },
      business: {
        name: account.business_name ? account.business_name : "",
        email: account.business_email ? account.business_email : "",
        address: account.business_address ? account.business_address : "",
        website: account.business_website ? account.business_website : "",
        rc: account.business_rc ? account.business_rc : "",
        did: account.did ? account.did : "",
        agents: account.agents ? account.agents : "",
        card: account.card ? account.card : "",
        artiste: account.artiste_voice ? account.artiste_voice : "",
        recordings: {
          intro: account.recording_intro ? account.recording_intro : "",
          thankyou: account.recording_thankyou
            ? account.recording_thankyou
            : "",
          hold: account.recording_hold ? account.recording_hold : "",
          hangup: account.recording_hangup ? account.recording_hangup : "",
          adverts: account.recording_adverts ? account.recording_adverts : "",
          aohcs: account.recording_aohcs ? account.recording_aohcs : "",
        },
      },
    };
  }

  return newState;
}
export default signin;
