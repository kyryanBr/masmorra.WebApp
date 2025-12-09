import React from "react";
import { ChevronRight } from "lucide-react";

export interface Choices {
  id: string | number;
  [key: string]: any;
}

interface ChoiceListProps {
  items: Choices[];
  displayKey: string;
  onSelect?: (item: Choices) => void;
}

export const ChoiceList: React.FC<ChoiceListProps> = ({
  items,
  displayKey,
  onSelect,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 16px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            transition: "all .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#fafafa";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span style={{ fontSize: "1rem", fontWeight: 500 }}>
            {item[displayKey]}
          </span>

          <ChevronRight size={20} style={{ opacity: 0.5 }} />
        </button>
      ))}
    </div>
  );
};

export default ChoiceList;
