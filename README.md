# HANG MAN

react typescipt를 사용하여 hangman 게임을 제작하였습니다

## 개발 기간

- 2024-12-02 ~ -2024-12-11 

## 개발 환경
- node v20.11.1
- typescipt v4.9.5
- react-redux v 18.3.1
- sass v1.80.4
- vite v5.4.9

## 어려웠던 점

1. **react의 라이프사이클**
-- 이 프로젝트를 진행하며 어려웠던 점은 리액트의 라이프사이클을 이해하고 적용하는 점이었습니다.
   Js는 함수선언 후, 어디서나 편리하게 함수를 실행시킬 수 있었지만,
   react는 함수선언 후, 이벤트에 함께 적용하려고 하자, 어떤 함수는 실행이 되고 어떤함수는 실행이 되지 않는 것을 볼 수 있었습니다. 그 원인은 "라이프사이클" 에서 찾을 수 있었습니다.
   이론적으로는 componentDidMount, componentDidUpdate, componentWillUnmount 를 알고있다 생각했지만 실질적으로 사용하려는 부분에서 어려움이었습니다. 이번 프로젝트를 통해 리액트의 라이프사이클을 한번더 이해하는 계기가 되었습니다.

##  기능 소개
<details><summary>메인화면</summary>
  
  -- Mainpage
  
  ![image](https://github.com/user-attachments/assets/266b23e4-7ee3-4293-94fa-a716d15b59f9)
  
  난이도 버튼 클릭 시, axios를 사용하여 데이터를 비동기적으로 가져와 문제를 제출하게 설정
  loading 시간이 걸리면 "데이터를 가져오는 중입니다 잠시만 기다려 주세요" 화면 보여줌

  -- loading화면
  
  ![image](https://github.com/user-attachments/assets/b9daea50-fa0f-41cc-b662-91759356665d)

  error나 loading 완료 시, 게임화면으로 이동

</details>

<details>
  <summary>게임화면  </summary>
    
    -- game화면
   ![image](https://github.com/user-attachments/assets/d72eb844-e688-4a96-bdef-ae151ad235f7)

api로 받아온 데이터는 별다른 설정이 없어, 데이터를 받아오면 받아온 데이터를 사용하기 편리하게 변경하여 사용해 준다

          setSplitWord(
            response.data[0].word.split('').map((letter:string, idx:number) => ({
              id: idx,
              spelling: letter,
              isChk: false,
            }))

모든 데이터의 isChk는 false 로 _ 처리하여 단어가 보이지 않게 만들어 준 다음 , 추후 게임을 이용하는 이용자가 알파벳을 맞추면 isChk를 true로 변경하여 알파벳을 보이게 처리 해 준다.

![image](https://github.com/user-attachments/assets/23f58937-0b0c-47b4-a28b-c38071966005)
[왼: 유추전 , 오: 유추후]


--키보드 알파벳 또한 배열로 작성 후, boolean 과 null 속성 부여하여, 
기존은 null ,맞는 알파벳일 경우 true , 유추한 알파벳이 틀린 경우에는 false를 부여하여 사용자가 어떤 알파벳을 유추했는지 알기 쉽게 ui로 보여준다.

![image](https://github.com/user-attachments/assets/a828fdcf-928b-47fc-a7c5-9c02fd6892fa)
[border 색이 들어 가 있는것이 null, true => 하얀배경 , false => 검은배경]

    const alphabet = new Array<string>(26).fill('').map((_, i) => String.fromCharCode(i + 97));
-- 알파벳을 일일히 치지 않고, new Array를 사용하여 한줄로 알파벳 배열 생성


-- 다음 버튼 클릭 시

  다음문제 클릭 시 다양한 이벤트 들이 발생한다.
  1. 문제가 바껴야 하고
  2. 알파벳의 속성은 모두 null처리 되어야 하며
  3. 남은 기회가 0으로 변경되어야 한다.

1번을 설명하기 위해서는 받아온 데이터에 대해 먼저 설명해야 한다.
먼저 받아온 데이터를 받아, useState를 사용하여 num이라는 변수를 설정하여 준다.
다음 문제클릭시 num의 숫자는 커지고, 다음 문제로 리셋되도록 설정 해 두었다.
   

</details>
