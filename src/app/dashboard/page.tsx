export default function Dashboard() {
  return (
    <div style={{ transform: "scale(0.7)", transformOrigin: "top left", width: "143%", height: "1000px" }}>
      <iframe
        title="GS"
        width="100%"
        height="2800"
        src="https://app.powerbi.com/view?r=eyJrIjoiOTk0NDk1ODItM2NiZC00MDliLWFmMmItOTY5YmFmNjU4MzUzIiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9"
        frameBorder="0"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}
