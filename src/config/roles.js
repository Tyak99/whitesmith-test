const allRoles = {
  agent: ['getUsers', 'getSchedule'],
  admin: ['createBooking', 'deleteBooking', 'getAgents', 'getUsers', 'getSchedule'],
};

const roles = Object.keys(allRoles);
const rolesRights = new Map(Object.entries(allRoles));

export {
  roles,
  rolesRights,
};
