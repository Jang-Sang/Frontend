import { useState } from 'react'

const useInputs = initialValue => {
	const [values, setValues] = useState(initialValue)

	const onChange = event => {
		console.log(event.target.name)
		setValues(prev => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	return [values, onChange, setValues]
}
export default useInputs

//value라는 값에 name이라는 속성을 집어넣는다.
//value ={name}

/*state 의 불변성
state가 바뀌는 조건? 

    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  이렇게 하면 깊한 복사를 하여 객체의 주소값이 아예 달라짐
  state가 객체일 때 state는 깊한 복사(deep equal)을 통해 객체 내 키값의 데이터가 변화가 있는지
  //확인하고 상태를 업데이트 합니다.
  //그러나 이러한 과정에서 새로운 객체를 선언하여 새로운 참조 메모리 주소값을 할당하면 
  //리액트는 deep equal을 하지 않고 메모리 주소 값이 달라졋으므로 상태를 업데이트 한다
  ==> 그러니 데이터가 객체일 떄 깇은 복사를 통해 새로운 객체를 만들어주어 상테를 업데이트한다. 
  이때는 상태가 배열도 포함이다.
  ==> 깊은 복사를 통해 상태를 업데이트하는 것이 안정적이다 (?)

  위가 더 중요함!!!!
  _______________________________________________________________

  원본 데이터의 훼손이 일어나면 하나의 ㅣstate는 다양한 컴포넌트에서 구독하고 있을 가능섣이 있다
  참조 데이터가 수정되면 현재 이 데이터를 참조하고 있는 컴포넌트에서 예외 사왕이 발생할 수 잇음
  사이드 이펙트의 배체

  ===> 이게 state의 불변성 유지이다!!!!

  ===> 객체일때 깊은 복사를 통해서 불변성을 유지하는 것이다. 


*/
