# HANG MAN

react typescipt를 사용하여 hangman 게임을 제작하였습니다

## 개발 기간

- 2024-12-02 ~ -2024-12-11 (이후 server를 추가로 작업하였습니다.)

## 개발 환경
- node v20.11.1
- typescipt v4.9.5
- react-redux v 18.3.1
- sass v1.80.4
- vite v5.4.9

## 어려웠던 점

1. **비동기처리**


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

   

</details>
