import { useState } from 'react';

import Header from '../components/Header.jsx';
import SummaryCard from '../components/SummaryCard.jsx';
import TaskCard from '../components/TaskCard.jsx';
import FilterBar from '../components/FilterBar.jsx';
import tasks from '../data/tasks.js';
import '../styles/global.css';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.assignee.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === 'All' || task.status === status;

    const matchesPriority = priority === 'All' || task.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearch('');
    setStatus('All');
    setPriority('All');
  };

  return (
    <div className="dashboard">
      <header>
        <h1>QR MED Team Workspace</h1>
        <p>Manage your engineering team tasks</p>
      </header>

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
      />

      <h2>Team Tasks</h2>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="no-tasks">
            <p>No tasks found!</p>

            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
