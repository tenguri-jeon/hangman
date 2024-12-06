import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import GameWord from '../components/GameWord';
import { splitWordType, wordType } from '../module/type';
import AlphabetItem from '../components/AlphabetItem';
import { AlphabetsListCom } from './styled';
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

  /* 알파벳 만들어서 배열로 만들어 주기 => 어떤 알파벳을 사용했는지 보여주기용 **/
  const alphabet = new Array<string>(26).fill("").map((_, i) => String.fromCharCode(i + 97));
  const [onalphabet, setAlphabet] = useState<splitWordType[]>([]);
  const getData = location.pathname.replace(/\/game\//g, '');
  console.log(onalphabet)

  // 알파벳 상태를 초기화
  const alpahbetArr = () => {
    setAlphabet(
      alphabet.map((letter: string, idx: number) => ({
        id: idx,
        spelling: letter,
        isChk: null, // 초기 값은 null
      }))
    );
  };

  // 버튼 클릭 시 다음 문제
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
      alpahbetArr()
    } else {
      alert(`정답은 ${word[num].word}였습니다`);
    }

    // 버튼 클릭 시 포커스를 다시 맞추기
    inputRef.current?.focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const checkEng = /^[a-zA-Z]$/;
    const doubleChk = onalphabet.some((alphabet) => alphabet.spelling === value && alphabet.isChk === null)

    // 영어인지 확인 및 중복단어인지 확인!
    if (checkEng.test(value) && doubleChk) {
      setInputValue(value);
      onWordGame(value);
      setInputValue('');  
    } else if(!doubleChk) {
      alert("중복됐습니다");
    }else{
      alert("영어만 입력 가능합니다.");
    }

    // 입력 시마다 포커스를 맞추기
    inputRef.current?.focus();
  };

  const onWordGame = (value: string) => {
    if (splitword.some(item => item.spelling === value) && !valueArr.includes(value)) {
        setValueArr(prevArr => [...prevArr, value]); // 맞는 단어인지 확인
        alphabetDisplay(true, value); 
      } else {
        if (leftNum < 8) {
          setLeftNum(prevLeftNum => {
            const newLeftNum = prevLeftNum + 1;
            alphabetDisplay(false, value); // 알파벳 상태변경
            return newLeftNum;
          });
        } else {
          onBtn(); // 기회가 다 떨어지면 다음 문제로 넘어가기
          alert(`정답은 ${word[num].word}였습니다.`);
        }
    }

    // 글자 확인 후 정답이면 isChk 변경해서 보여줌
    const updatedSplitWords = splitword.map((item) => ({
      ...item,
      isChk: valueArr.includes(item.spelling),
    }));

    setSplitWord(updatedSplitWords);

    // 입력 후 포커스를 다시 맞추기
    inputRef.current?.focus();
  };

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

  // API 호출
  useEffect(() => {
    axios
      .get(`https://api.datamuse.com/words?rel_trg=${getData}`) 
      .then((response) => {
        setLoading(false);
        alpahbetArr(); // 알파벳 상태 초기화
        inputRef.current?.focus();
        if (response.data.length > 0) {
          setWord(response.data);
          setSplitWord(
            response.data[0].word.split('').map((letter: string, idx: number) => ({
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
  }, []);

  if (loading) {
    return <div>문제를 제작하고 있습니다 잠시만 기다려주세요...</div>; 
  }

  return (
    <div>
      <div>
        <h2>단어: {word[num].word}</h2>
      </div>

      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {splitword.map((item) => (
          <GameWord key={item.id} word={item} />
        ))}
      </ul>

      <AlphabetsListCom>
        {onalphabet.map((alphabets, idx) => (
          <AlphabetItem key={idx} alphabets={alphabets} />
        ))}
      </AlphabetsListCom>

      <span>남은 기회 {leftNum} / 8 <br /></span>

      <input 
        type="text" 
        ref={inputRef}
        value={inputValue}  
        onChange={onChange} 
        placeholder="단어를 입력해 주세요" 
      />

      {/* 버튼 클릭 시 다음 단어로 이동 */}
      <button onClick={onBtn}>다음문제</button>
    </div>
  );
};

export default Main;
