import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Word from "./Word";

export default function Day() {
  const { day } = useParams();
  //OR
  //const a = useParams().day;
  console.log(day);
  //1. a 에, url파라미터 출력 { 변수: 값}

  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
        //response 는 http 응답
      })
      .then((data) => {
        setWords(data);
      });
    //api 비동기 통신을 위해 fetch 이용,
    //api 경로 입력 ,
  }, [day]);

  //useEffect 와같이 특정 값을 사용하면 마지막 배열에 입력
  //입력하지않으면 , day가 변경되어도 새로운정보 못가져옴

  // const wordList = dummy.words.filter(
  //   (word) => word.day === Number(day)
  //   //단어의 날짜가 1인것만.
  // );

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
