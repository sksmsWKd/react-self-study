import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
        //response 는 http 응답
      })
      .then((data) => {
        setData(data);
      });
    //api 비동기 통신을 위해 fetch 이용,
    //api 경로 입력 ,
  }, [url]);

  return data;
}

//custom hook
