import React, { useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarCode() {
  const [data, setData] = React.useState("Not Found");

  useEffect(() => {
  console.log("valor"+data);
  }, [data]);

  return (
    <>
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
      <p>{data}</p>
    </>
  );
}

export default BarCode;