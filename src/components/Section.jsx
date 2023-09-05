import { LevelContext } from "../context/LevelContext";

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level || 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
