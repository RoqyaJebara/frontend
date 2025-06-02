import AlertButton from './AlertButton.jsx';

function StudentCard({ name, grade }) {
  let status = "Needs Improvement";

  if (parseInt(grade) >= 85) {
    status = "Excellent Student";
  }

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h1>{status}</h1>
        <AlertButton name={name} grade={status} />
      </div>
    </div>
  );
}

export default StudentCard;
