let time = new Date();
function Timem() {
  return (
    <p className="lead">
      This is the current time:-{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}{" "}
    </p>
  );
}

export default Timem;
