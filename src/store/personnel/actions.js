export const LOADING = "PERSONNEL_LOADING";
export const REQUEST = "PERSONNEL_REQUEST";
export const GETPERSONNEL = "GETPERSONNEL";
export const EACHPERSONNEL = "EACHPERSONNEL";
export const CREATEPERSONNEL = "CREATEPERSONNEL";
export const UPDATEPERSONNEL = "UPDATEPERSONNEL";
export const STATUSANDSKILLS = "STATUSANDSKILLS";
export const GETDEPARTMENT = "GETDEPARTMENT";
export const CREATEDEPARTMENT = "CREATEDEPARTMENT";
export const UPDATEDEPARTMENT = "UPDATEDEPARTMENT";
export const DELETEDEPARTMENT = "DELETEDEPARTMENT";

export const getPersonnels = (id, success) => ({
  type: REQUEST,
  responder: id ? EACHPERSONNEL : GETPERSONNEL,
  method: "GET",
  endpoint: id ? 'personnel/' + id : 'personnel',
  success
});

export const createPersonnel = (data, success) => ({
  type: REQUEST,
  responder: CREATEPERSONNEL,
  method: "POST",
  endpoint: 'personnel',
  data,
  success
});

export const updatePersonnel = (data, success, id) => ({
  type: REQUEST,
  responder: UPDATEPERSONNEL,
  method: "PUT",
  endpoint: 'personnel/' + id,
  data,
  success
});

export const deletePersonnel = id => ({
  type: REQUEST,
  responder: UPDATEPERSONNEL,
  method: "DELETE",
  endpoint: 'personnel',
  data: id
});

export const statusAndSkills = () => ({
  type: REQUEST,
  responder: STATUSANDSKILLS,
  method: "DELETE",
  endpoint: 'personnel'
});

export const getDepartments = (success) => ({
  type: REQUEST,
  responder: GETDEPARTMENT,
  method: "GET",
  endpoint: 'department',
  success
});

export const createDepartment = (data, success) => ({
  type: REQUEST,
  responder: CREATEDEPARTMENT,
  method: "POST",
  endpoint: 'department',
  data,
  success
});

export const updateDepartment = (data, success, id) => ({
  type: REQUEST,
  responder: UPDATEDEPARTMENT,
  method: "PUT",
  endpoint: 'department/' + id,
  data,
  success
});

export const deleteDepartment = (id) => ({
  type: REQUEST,
  responder: DELETEDEPARTMENT,
  method: "DEL",
  endpoint: 'department/' + id,
});

