import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
export default function Day() {
  const { day } = useParams();
  //OR
  //const a = useParams().day;
  console.log(day);
  //1. a 에, url파라미터 출력 { 변수: 값}

  const wordList = dummy.words.filter(
    (word) => word.day === Number(day)
    //단어의 날짜가 1인것만.
  );

  console.log(wordList);

  return (
    <div>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
