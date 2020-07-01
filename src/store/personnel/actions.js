export const LOADING = "CALLS_LOADING";
export const REQUEST = "CALLS_REQUEST";
export const GETPERSONNEL = "GETPERSONNEL";
export const EACHPERSONNEL = "EACHPERSONNEL";
export const CREATEPERSONNEL = "CREATEPERSONNEL";
export const UPDATEPERSONNEL = "UPDATEPERSONNEL";

export const getPersonnels = id => ({
  type: REQUEST,
  responder: id ? GETPERSONNEL : EACHPERSONNEL,
  method: "GET",
  endpoint: id ? 'personnel/' + id : 'personnel'
});

export const createPersonnel = data => ({
  type: REQUEST,
  responder: CREATEPERSONNEL,
  method: "POST",
  endpoint: 'personnel',
  data
});

export const updatePersonnel = id => ({
  type: REQUEST,
  responder: UPDATEPERSONNEL,
  method: "PUT",
  endpoint: 'personnel',
  data: 'personnel/' + id
});

export const deletePersonnel = id => ({
  type: REQUEST,
  responder: UPDATEPERSONNEL,
  method: "DELETE",
  endpoint: 'personnel',
  data: id
});