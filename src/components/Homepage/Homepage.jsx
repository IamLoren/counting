import React, { useRef, useState } from "react";
import { api } from "../../configAxios.js";
import { Result } from "../Result/Result.jsx";
import Container from "../Container/Container.jsx";
import { StyledInput, StyledTitle, StyledButton, StyledDiv, StyledFileName, SendButton, StyledForm, StyledMessage } from "./Homepage.styled.js";
import Output from "../Output/Output.jsx";

const Homepage = () => {
  const ref = useRef();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("Почекайте закінчення обробки Вашого файлу");
  const [data, setData] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);


  const handleFileChange = () => {
    if (ref.current.files.length > 0) {
      setFile(ref.current.files[0]);
      setIsDisabled(false);
    }
    setData(null);
    setMessage("Почекайте закінчення обробки Вашого файлу")
  };

  const sendDataToBack = async (e) => {
    e.preventDefault();
    setIsModal(true);

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await api.post("/send", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setData(response.data);
      setMessage(response.data.message);
      setIsModal(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Error uploading file.");
    }
  };

  return (
    <Container>
      <StyledTitle>
        Завантажте документ у форматі .txt, який містить набір чисел, та
        дізнайтеся найбільше число списку, найменше, медіану та середнє
        арифметичне!
      </StyledTitle>
      <StyledForm onSubmit={sendDataToBack}>
        <StyledDiv>
           <StyledInput type="file" id="fileInput" accept=".txt" ref={ref} onChange={handleFileChange}/>
        <StyledButton type='button'>
        Завантажити файл
      </StyledButton>
        </StyledDiv>
       {file && <StyledFileName>Обрано файл {file.name}</StyledFileName>}
        <SendButton type='submit' disabled={isDisabled}>Відправити нашим геніям математики</SendButton>
      </StyledForm>
     <StyledMessage>{data?.message}</StyledMessage>
    {data && <Output data={data}/>}
     {isModal && <Result message={message} progress={100}></Result>}
    </Container>
  );
};

export default Homepage;
