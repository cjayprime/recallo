import * as Actions from "../actions";

function load(state, action) {
  const { data, status } = action;
  let newState = {
    ...state
  };

  if (status === true && (data.me && data.me.account)) {
    const account = data.me.account;
    return {
      ...newState,
      user: {
        firstname: data.me.first_name,
        lastname: data.me.last_name,
        email: data.me.email,
        mobile: data.me.mobile,
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
      }
    };
  }else if (status === false || (!data.me && !data.me.account)) {
    // Actions.token.remove();
  }

  return newState;
}
export default load;
