export const AttendaceBook = () => {
  const students = [
    { id: 1, name: "Jnje" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Jeff" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};
