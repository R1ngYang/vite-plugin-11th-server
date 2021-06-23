export const setReactive = (o1: any, o2: any) => {
    Object.keys(o2).forEach(key => {
        o1[key] = o2[key];
    })
    return o1;
}