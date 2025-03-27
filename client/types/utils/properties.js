export const groupIdSelector = (groupId) => {
  return (groups) => {
    return groups.find(entry => entry.id === groupId);
  };
};

export const entryIdSelector = (entryId) => {
  return (entries) => {
    return entries.find(entry => entry.id === entryId);
  };
};
