const insertionSorted = ( arr ) => {
    for( let i = 1; i <= arr.length-1; i++ ) {
        let tmp = arr[i];
        let pos = i-1;
        while( pos >= 0 && (arr[pos] > tmp) ) {
            arr[pos+1] = arr[pos];
            arr[pos] = tmp;
            pos--;
        }
    }
    return arr;
}

const selectionSorted = ( arr ) => {
    for( let i = 0; i < arr.length-1; i++ ) {
        let lowestNumberIndex = i;
        for( let j = i+1; j<arr.length; j++ ) {
            if( arr[j] < arr[lowestNumberIndex] ) lowestNumberIndex = j;
        }
        if( lowestNumberIndex != i ) {
            [ arr[i], arr[lowestNumberIndex] ] = [ arr[lowestNumberIndex], arr[i]];
        }
    }
    return arr;
}

const bubbleSorted_ = (arr) => {
    let unsorted_until_index = arr.length-1;
    let sorted = false;
    while( !sorted ) {
        sorted = true;
        for( let i = 0; i < unsorted_until_index; i++ ) {
            if( arr[i] > arr[i+1] ) {
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
                sorted = false;
            }
        }
        unsorted_until_index -= 1;
    }
    return arr;
}

const test_arr = [ 47, 35, 89, 12, 87, 9, 54, 22, 98, 66, 21, 67, 92, 3, 1, 39 ];
const test = [ 47, 35, 89, 12 ];
// console.log('1]삽입 정렬: ', insertionSorted( test_arr ));
console.log('2]선택 정렬: ', selectionSorted( test ) );
console.log('4]버블 정렬: ', bubbleSorted_(test));


/* 정석 삽입정렬
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


/* 별로 좋지 않지만 내 스타일의 구현되는 선택 정렬
const selectionSorted = ( arr ) => {
    
    for( let i = 0; i <= arr.length-1; i++ ) {
        
        let min = arr[i]; // 최소값 선정
        let pos = i+1;

        while( pos <= arr.length-1 ) {
            if( arr[pos] < min ) {
                let temp = arr[i];
                arr[i] = arr[pos];
                arr[pos] = temp;
            }
            pos++
        }
    }

    return arr;
}
*/

/* 비효율적 버블
const bubbleSorted = (arr) => {

    for( let i = 0; i < arr.length-1; i++ ) {
    
        let pos = i+1;
        for( let j = 0; j < arr.length-1-i; j++ ) {
            let k = j+1;
            if( arr[j] > arr[k] ) {
                let tmp = arr[k];
                arr[k] = arr[j];
                arr[j] = tmp;
            }
        }
        
    }

    return arr;
    
}

*/