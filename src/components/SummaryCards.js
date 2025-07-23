import React from 'react';

const SummaryCards = ({ trainings }) => {
    const total = trainings.length;
    const completed = trainings.filter(t => t.status === "Completed").length;
    const upcoming = trainings.filter(t => t.status === "Upcoming").length;
    const trainers = [...new Set(trainings.map(t => t.trainer))].length;

    return (
        <div className="summary-cards">
            <div className="card">Total Trainings: {total}</div>
            <div className="card">Completed: {completed}</div>
            <div className="card">Upcoming: {upcoming}</div>
            <div className="card">Trainers: {trainers}</div>
        </div>
    );
};

export default SummaryCards;
