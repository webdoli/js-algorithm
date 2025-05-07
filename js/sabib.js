function sabib ( arr ) {

    // Ver01
    /*
    for( let i = 1; i < arr.length; i++ ) {
        let tmp_val = arr[i];
        let pointer = i - 1;

        while( pointer >= 0 ) {
            if( tmp_val < arr[pointer] ) {
                arr[pointer+1] = arr[pointer];
                pointer--;
            } else {
                break;
            }
            arr[pointer+1] = tmp_val;
        }
    }
    */

    // ver02
    for( let i = 1; i < arr.length; i++ ) {
        let tmp_val = arr[i];
        let pointer = i - 1;

        while( pointer >= 0 ) {
            if( tmp_val < arr[pointer] ) {
                arr[pointer+1] = arr[pointer];
            } else {
                break;
            }
            arr[pointer] = tmp_val;
            pointer--;
        }
    }

    return arr;

}

let temp_arr01 = [ 20, 14, 47, 31, 2, 45, 5, 83, 8, 10, 37, 90, 71, 13, 49, 50, 56 ];
let temp_arr02 = [ 20, 14, 4 ];
let res = sabib( temp_arr02 );
console.log(res);