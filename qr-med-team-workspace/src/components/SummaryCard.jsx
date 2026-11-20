function SummaryCard({ title, count }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <h2>{count}</h2>
    </div>
  );
}

export default SummaryCard;
