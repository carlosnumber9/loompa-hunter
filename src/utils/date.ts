export const lastRequestExpired = (lastRequestTime: number): boolean => {
    const msDiff: number = Math.abs(lastRequestTime - new Date().getTime());
    const daysDiff: number = msDiff / (1000*60*60*24);
    return daysDiff > 1;
}