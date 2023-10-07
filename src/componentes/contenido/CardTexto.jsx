import React, { useState } from "react";

function CardTexto({ setChatGPTResponse }) {
  const [inputUsuario, setInputUsuario] = useState(""); // camel case, snake case, pascal case

  //   console.log(process.env.REACT_APP_API_KEY_GPT);
  //   console.log(REACT_APP_API_KEY_GPT);

  function changeinput(event) {
    const input = event.target.value;
    setInputUsuario(input);
  }

  const handleClick = async (param) => {
    if (param === 4) {
      const response = await fetch(
        `https://alquilarya.up.railway.app/api/probe`
      );
      const json = await response.json();
      console.log("json front console.log", json);
      setChatGPTResponse(json);
    }

    try {
      // const axiosResponse = await instance.get(`/gpt/${param}?prompt=${inputUsuario}`);
      const response = await fetch(
        `https://alquilarya.up.railway.app/api/gpt/${param}?prompt=${inputUsuario}`,
        {
          headers: {
            Authentication: `Bearer ${process.env.REACT_APP_API_KEY_GPT}`,
          },
        }
      );
      const json = await response.json();
      console.log("json", json);
      setChatGPTResponse(json.text);
    } catch (err) {
      console.log(err);
    }
  }; // Refactorizar

  return (
    <div className="card w-50">
      <header style={{ color: "white" }}>Usuario</header>
      <textarea
        onChange={changeinput}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Ingrese lo que recuerde del sueño"
      ></textarea>
      <div className="container d-flex col-3 w-100 justify-content-center">
        <button onClick={() => handleClick(1)} className="btn btn-primary">
          finalizar Sueño
        </button>
        <button onClick={() => handleClick(2)} className="btn btn-primary">
          Finalizar Narrativa
        </button>
        <button onClick={() => handleClick(3)} className="btn btn-primary">
          Finalizar....
        </button>
        <button onClick={() => handleClick(4)} className="btn btn-primary">
          PROBE
        </button>
      </div>
    </div>
  );
}

export default CardTexto;
