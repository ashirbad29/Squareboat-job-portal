// miscellaneous utility functions

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

export const getTotalPage = (totalRecords: number, limit: number) => {
  return Math.floor(totalRecords / limit) + (totalRecords % limit ? 1 : 0);
};
