

// supports levels 1-3 (h1-h3)
export const classHeader = (level: number) => `text-${6-level}xl ${level<3?'font-bold':''}`
export const classText = () => `text-xl lg:text-base`;