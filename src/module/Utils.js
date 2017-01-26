/**
 * Created by crow on 2017/1/25.
 */


/**
 * 删除数组中指定的元素,返回新数组
 * @param arr
 * @param index
 * @returns {Array}
 */
export function removeArrayByIndex(arr = [], index) {
    let a = [];
    for (let n = 0; n < arr.length; n++) {
        if (n !== index) {
            a.push(arr[n]);
        }
    }

    return a;
}