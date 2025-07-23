import React from 'react';

const TrainingChart = ({ trainings }) => {
    const completed = trainings.filter(t => t.status === "Completed").length;
    const upcoming = trainings.filter(t => t.status === "Upcoming").length;

    return (
        <div className="chart">
            <h3>Training Status</h3>
            <p>Completed: {completed}</p>
            <p>Upcoming: {upcoming}</p>
        </div>
    );
};

export default TrainingChart;
