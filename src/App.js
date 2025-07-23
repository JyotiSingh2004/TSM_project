import React, { useState } from 'react';
import  './App.css';
import trainings from './Data/DataTrainings';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TrainingChart from './components/TrainingChart';
import TrainingTable from './components/TrainingTable';
import CalendarView from './components/CalendarView';

function App() {
    const [filterMode, setFilterMode] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [search, setSearch] = useState("");

    return (
        <div className="App">
            <Header />
            <SummaryCards trainings={trainings} />
            <TrainingChart trainings={trainings} />

            <div className="filters">
                <select onChange={e => setFilterMode(e.target.value)}>
                    <option value="All">All Modes</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>

                <select onChange={e => setFilterStatus(e.target.value)}>
                    <option value="All">All Status</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                </select>

                <input 
                    type="text" 
                    placeholder="Search by Title or Trainer" 
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <TrainingTable 
                trainings={trainings} 
                filterMode={filterMode} 
                filterStatus={filterStatus} 
                search={search}
            />

            <CalendarView trainings={trainings} />
        </div>
    );
}

export default App;
