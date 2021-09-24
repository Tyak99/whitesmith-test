const allRoles = {
  user: [],
  agent: [],
  admin: [],
};

const roles = Object.keys(allRoles);
const rolesRights = new Map(Object.entries(allRoles));

export {
  roles,
  rolesRights,
};
