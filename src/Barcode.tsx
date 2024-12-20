import { Button } from "@mui/material";
import React, { useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Condicional from "./Condicional";

function BarCode() {
  const [data, setData] = React.useState("Not Found");
  const [exibe, setexibe] = React.useState(false);

  useEffect(() => {
  console.log("valor"+data);
  }, [data]);

  function exibirCamera(){
    setexibe(!exibe);
  }
  return (
    <>

    <Button onClick={exibirCamera}>Exibir</Button>
     <Condicional condicao={exibe}>
      <BarcodeScannerComponent
        width={500}
        height={500}       
          onUpdate={(err, result) => {
            if (result) {
              console.log("Código de barras lido: " + result.getText());
              setData(result.getText()); // Salva o valor do código de barras
            } else {
              setData("Not Found");
            }
          }}
      />
        </Condicional>
      <p>{data}</p>
    </>
  );
}

export default BarCode;