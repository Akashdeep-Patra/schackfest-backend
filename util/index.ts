export function paginateArray(arr:Array<any> , limit =10 , offset = 1) {
    const lastIndex = limit * offset;
    const firstIndex = lastIndex - limit;
    return arr.slice(firstIndex , lastIndex);
}
