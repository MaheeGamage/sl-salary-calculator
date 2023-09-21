export const insertRupee = (val: string) => `$` + val
export const removeRupee = (val: string) => val.replace(/^\$/, '')
