import React from "react";
import "../styles/SearchFilter.css";

export default function SearchFilter({ query, onChange }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
