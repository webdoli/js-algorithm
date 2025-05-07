const ejin = ( arr, val ) => {
    // 시작선, 상한선 설정하기
    let lowerBound = 0; 
    let upperBound = arr.length - 1;

    while( lowerBound <= upperBound ) 
    {
        let midPoint = parseInt( ( upperBound + lowerBound ) / 2 );
        console.log('midPoint: ', midPoint );
        
        // 중간 지점의 값 확인
        let mid_value = arr[ midPoint ];
        console.log('mid_value: ', mid_value );

        //중간 지점의 값이 찾던 값이면 검색 끝냄
        //그렇지 않을 경우, val보다 더 큰지 작은지 확인 후 상한선 하한선 변경
        if( val === mid_value ) {
            return midPoint
        } else if( val < mid_value ) {
            upperBound = midPoint - 1;
        } else if( val > mid_value ) {
            lowerBound = midPoint + 1;
        } 
    }

    return null;

}

let ejin_res = ejin([23, 34, 40, 45, 47, 49, 51, 56, 61, 72, 87 ], 100 );
console.log('이진트리 값(67)의 인덱스는? ', ejin_res );
