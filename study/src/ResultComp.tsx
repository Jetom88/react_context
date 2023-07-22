import { useContext } from "react";
import { TextValueDataContext, UpdateTextValueDataContext } from "./context";

const ResultComp = () => {
  const textContext = useContext(TextValueDataContext);
  const updateTextContext = useContext(UpdateTextValueDataContext);

  const handleChangeText = (payload: string) => {
    updateTextContext(payload);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleChangeText("Jetom 🐾");
      }}
    >
      Hello {textContext}
    </div>
  );
};

export default ResultComp;
