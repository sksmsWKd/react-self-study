import { useState } from "react";

export default function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function del() {
    if (window.confirm("삭제?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }
  if (word.id === 0) {
    return null;
  }

  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //보내는데이터 type
      },
      body: JSON.stringify({
        //가지고오는 get과는 다르게 , put을 수정을위한 정보를 함께 보내야함
        ...word,
        isDone: !isDone,
        //기존정보에
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }
  return (
    <tr key={word.id} className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          meaning {isShow ? "숨기기" : "보기"}
        </button>
      </td>
      <td>
        <button className="delete" onClick={del}>
          delete
        </button>
      </td>
    </tr>
  );
}

//json 서버 , 빠르게 rest api구현 가능.
