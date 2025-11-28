import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import AppBackground from "../components/AppBackground";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ResultadoRegistro = () => {
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 100,
    temperature: 0.5,
    topP: 0.1,
    topK: 16,
  };
  const apiKey = import.meta.env.VITE_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);

  const location = useLocation();
  const { food } = location.state || false;

  const navigate = useNavigate();

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig,
    safetySettings,
  });

  const chat = model.startChat({
    history: [],
  });

  const instruction = `
   Genera **solo** un objeto JSON válido con esta estructura exacta:

    {"description":"<descripción>", "consejo":"<consejo>"}

    Reglas estrictas:
    - **No** uses bloques de código.
    - **No** incluyas texto antes o después del JSON.
    - **No** agregues saltos de línea dentro o fuera del JSON.
    - La respuesta debe ser **una sola línea**.
    - La descripción debe felicitar al usuario por lo consumido.
    - El consejo debe ser breve y útil.
    - No inventes información distinta a la proporcionada.

    Información del alimento:  
    - Nombre: ${food.foodName}  
    - Descripción: ${food.foodDescription}

    `;

  const messageQuery = useQuery({
    queryFn: async () => chat.sendMessage(instruction),
    queryKey: ["ai_message", food],
    staleTime: Infinity,
    cacheTime: Infinity,
    // enabled: false,
    // refetchOnMount: true,
  });

  if (!food) {
    return <Navigate to="/home" />;
  }

  if (messageQuery.isPending) {
    return <div className="subContainer">Cargando</div>;
  }
  if (messageQuery.isError) {
    return <div className="subContainer">Un error ha ocurrido</div>;
  }

  const responseJson = JSON.parse(messageQuery.data.response.text());
  return (
    <>
      <AppBackground show={true} />
      <Button className="btn-volver" onClick={() => navigate("/home")}>
        {"<"} Volver
      </Button>
      <div className="subContainer">
        <p className="text-bold">Registro agregado</p>
        <p>{responseJson.description}</p>
        <br></br>
        <p style={{ fontWeight: "bold", color: "green" }}>+3 puntos</p>
        <br></br>
        <p>{responseJson.consejo}</p>

        <Button className="btn-regular" onClick={() => navigate("/home")}>
          Entendido
        </Button>
      </div>
    </>
  );
};

export default ResultadoRegistro;