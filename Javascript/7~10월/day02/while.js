let num = 5;
                    while(true){
                        console.log(num);
                        --num;   //4,3,2,1
                        if(num === 0) break;
                        // 무한 루프에 대한 탈출
                    }

                    while(num<10){
                        num++; -- //이 연산자를 하고 더하겠다는 것 전위연산자
                        console.log(num);
                        // 5,6,7,8,9
                        ++num;
                        console.log(num); //먼저 더하고 연산자를 실행한다 후위연산자
                        // 6,7,8,9,10
                    }

                        let count = 3;
                        do {
                            console.log(count);
                        } while (count < 3)

                        // 사용할 때 - 무한 루프를 걸어두고 특정 조건이 될때까지 확인이 필요할 때
                        // 그 이외에는 for를 사용하다보니까 자바스크립트에서는 거의 사용되지 않는다.
                        