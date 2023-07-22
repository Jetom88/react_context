import { ReactNode, createContext, useState } from "react";

export const TextValueDataContext = createContext<string | null>(null);
export const UpdateTextValueDataContext = createContext<
  (payload: string) => void
>(() => {});

const TextValueContext = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("Hyeri😎");

  return (
    <UpdateTextValueDataContext.Provider
      value={(value) => {
        setText(value);
      }}
    >
      <TextValueDataContext.Provider value={text}>
        {children}
      </TextValueDataContext.Provider>
    </UpdateTextValueDataContext.Provider>
  );
};

export default TextValueContext;
