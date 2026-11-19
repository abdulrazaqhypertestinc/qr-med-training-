const sampleTasks = [
  { id: 1, status: 'To Do' },
  { id: 2, status: 'To Do' },
  { id: 3, status: 'To Do' },
  { id: 4, status: 'In Progress' },
  { id: 5, status: 'In Progress' },
  { id: 6, status: 'Done' },
  { id: 7, status: 'Done' },
  { id: 8, status: 'Done' },
];

export default function Dashboard({ tasks = sampleTasks }) {
  const stats = [
    { title: 'Total Tasks', count: tasks.length },
    { title: 'To Do', count: tasks.filter((t) => t.status === 'To Do').length },
    { title: 'In Progress', count: tasks.filter((t) => t.status === 'In Progress').length },
    { title: 'Done', count: tasks.filter((t) => t.status === 'Done').length },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>QR MED Team Workspace</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '12px',
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}
          >
            <p style={{ margin: 0, color: '#555' }}>{item.title}</p>
            <h2 style={{ margin: '8px 0 0' }}>{item.count}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}