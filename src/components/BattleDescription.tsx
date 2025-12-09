import { useEffect, useState } from "react";
import { Text } from "react-native-paper";

interface BattleDescriptionProps {
  description?: string;
  speed?: number; // opcional, padrão 50ms
}

export default function BattleDescription({ description = "", speed = 50 }: BattleDescriptionProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // reset ao mudar a descrição
    if (!description) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        // só adiciona se houver caractere
        if (index < description.length) {
          const nextChar = description[index];
          index++;
          return prev + nextChar;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    // cleanup: garante que não fique interval rodando
    return () => clearInterval(interval);
  }, [description, speed]);

  return <Text style={{
    paddingVertical: 20,
     width: "100%", flexWrap: "wrap"
  }}
  >{displayedText}</Text>;
}
