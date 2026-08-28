import Student from "./Student2.jsx";

function App() {
  return (
    <>
      <Student name="Degea" age={32} isStudent={false} />

      <Student name="Totti" age={22} isStudent={true} />

      <Student name="kangentu" age={12} isStudent={true} />
    </>
  );
}

export default App;
