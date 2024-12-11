import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import GameWord from '../components/GameWord';
import { splitWordType, wordType } from '../module/type';
import AlphabetItem from '../components/AlphabetItem';
import { AlphabetsListCom, QuizCom } from './styled';
import { useLocation } from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const [word, setWord] = useState<wordType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [num, setNum] = useState<number>(0);
  const [splitword, setSplitWord] = useState<splitWordType[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [valueArr, setValueArr] = useState<string[]>([]);
  const [leftNum, setLeftNum] = useState<number>(0);
  const [hintNum , setHint] = useState<number>(0)

  // 알파벳 리스트 초기화
  const alphabet = new Array<string>(26).fill('').map((_, i) => String.fromCharCode(i + 97));
  const [onalphabet, setAlphabet] = useState<splitWordType[]>([]);
  const getData = location.pathname.replace(/\/game\//g, '');

  // 알파벳 상태를 초기화하는 함수
  const alpahbetArr = () => {
    setAlphabet(
      alphabet.map((letter:string, idx:number) => ({
        id: idx,
        spelling: letter,
        isChk: null, 
      }))
    );
  };

  // 다음 문제로 넘어가는 함수
  const onBtn = () => {
    if (num + 1 < word.length) {
      setNum(num + 1);
      setSplitWord(
        word[num + 1].word.split('').map((letter, idx) => ({
          id: idx,
          spelling: letter,
          isChk: false,
        }))
      ); // 다음 알파벳 배열정리
      setValueArr([]);
      setLeftNum(0);
      alpahbetArr();
    } else {
      alert(`정답은 ${word[num].word}였습니다`);
    }

    inputRef.current?.focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const checkEng = /^[a-zA-Z]$/;
    const doubleChk = onalphabet.some((alphabet) => alphabet.spelling === value && alphabet.isChk === null);
    
    if (checkEng.test(value) && doubleChk) {
      setInputValue(value);
      onWordGame(value);
      setInputValue('');  
    } else if (!doubleChk) {
      alert("중복 됐습니다");
    } else {
      alert("영어만 입력 가능합니다.");
    }

    inputRef.current?.focus();
  };

  // 단어 게임 로직
  const onWordGame = (value: string) => {
    if (splitword.some(item => item.spelling === value) && !valueArr.includes(value)) {
      setValueArr((prevArr) => {
        const newArr = [...prevArr, value];
        return newArr;
      });
      alphabetDisplay(true, value);
      const updatedSplitWords = splitword.map((item) => 
        item.spelling === value ? { ...item, isChk: true } : item
      );
      setSplitWord(updatedSplitWords);
    } else {
      if (leftNum < 8) {
        setLeftNum(prevLeftNum => {
          const newLeftNum = prevLeftNum + 1;
          alphabetDisplay(false, value);
          return newLeftNum;
        });
      } else {
        onBtn();
        alert(`정답은 ${word[num].word}였습니다.`);
      }
    }
    correctAnswer()
    inputRef.current?.focus();
  };

  const correctAnswer = () => {
    // valueArr가 splitword의 모든 spelling을 포함하는지 체크
    if (splitword.every(item => valueArr.includes(item.spelling))) {
      alert('정답입니다!');
      onBtn(); 
    }
  }

  // 알파벳 상태 변경
  const alphabetDisplay = (type: boolean, value: string) => {
    const updatedAlphabets = onalphabet.map((alphabet) => {
      if (alphabet.spelling === value) {
        return { ...alphabet, isChk: type ? true : false };
      }
      return alphabet;
    });
    setAlphabet(updatedAlphabets);
  };

  // const onHint = () => {
  //   let randomNum: number = Math.floor(Math.random() * splitword.length);
  
  //   while (splitword[randomNum].isChk === true) {
  //     randomNum = Math.floor(Math.random() * splitword.length);
  //   }
  
  //   // 해당 항목의 isChk 상태를 true로 변경
  //   const updatedSplitWord = splitword.map((item, idx) => {
  //     if (idx === randomNum && item.isChk === false) {
  //       return { ...item, isChk: true };
  //     }
  //     return item;
  //   });
  
  //   setSplitWord(updatedSplitWord);
  //   setHint(hintNum + 1);
  
  //   // 10초 뒤에 isChk 값을 false로 다시 변경
  //   setTimeout(() => {
  //     const resetSplitWord = splitword.map((item, idx) => {
  //       if (idx === randomNum) {
  //         return { ...item, isChk: false }; 
  //       }
  //       return item;
  //     });
  //     setSplitWord(resetSplitWord); 
  //   }, 5000); 
  // };

  // API 호출
  useEffect(() => {
    axios
      .get(`https://api.datamuse.com/words?rel_trg=${getData}`)
      .then((response) => {
        setLoading(false);
        alpahbetArr(); 
        inputRef.current?.focus();
        if (response.data.length > 0) {
          setWord(response.data);
          setSplitWord(
            response.data[0].word.split('').map((letter:string, idx:number) => ({
              id: idx,
              spelling: letter,
              isChk: false,
            }))
          );
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [getData]);

  useEffect(() => {
    alpahbetArr();
  }, [num ]);



  // 로딩 중일 때 처리
  if (loading) {
    return <div>문제를 제작하고 있습니다 잠시만 기다려주세요...</div>; 
  }

  return (
    <div>
      <div>
        {leftNum === 8 && <h2>정답: {word[num].word}</h2>}
      </div>

      <QuizCom>
        {splitword.map((item) => (
          <GameWord key={item.id} word={item} />
        ))}
      </QuizCom>

      <AlphabetsListCom>
        {onalphabet.map((alphabets, idx) => (
          <AlphabetItem key={idx} alphabets={alphabets} />
        ))}
      </AlphabetsListCom>

      <span>남은 기회 {leftNum} / 8 <br /></span>
      {/* <span>남은 힌트 기회 {hintNum} / 5 <br/></span> */}

      <input 
        type="text" 
        ref={inputRef}
        value={inputValue}  
        onChange={onChange} 
        placeholder="단어를 입력해 주세요" 
      />

      <button onClick={onBtn}>다음문제</button>
      {/* <button onClick={onHint}>힌트</button> */}
    </div>
  );
};

export default Main;
