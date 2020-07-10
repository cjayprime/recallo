export const LOADING = "VOICENOTE_LOADING";
export const REQUEST = "VOICENOTE_REQUEST";
export const ALLVOICENOTE = "ALLVOICENOTE";
export const EACHVOICENOTE = "EACHVOICENOTE";
export const PROFILEVOICENOTE = "PROFILEVOICENOTE";

export const getVoiceNotes = path => ({
  type: REQUEST,
  responder: path === 'all' ? ALLVOICENOTE : EACHVOICENOTE,
  method: "GET",
  endpoint: 'voicenote/' + path
});

export const profileVoiceNote = (data, success) => ({
  type: REQUEST,
  responder: PROFILEVOICENOTE,
  method: "POST",
  endpoint: 'voicenote/profile',
  data,
  success
});