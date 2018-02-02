/**
 * Created by dell on 2018-02-02.
 */
let getResult = arr => {
    let resultArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0, len = resultArr.length; i < len; i++) {
        let [a, b, c] = resultArr[i];
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return arr[a];
        }
    }
    return null;
};
module.exports = {getResult};