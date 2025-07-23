import React from 'react';

const CalendarView = ({ trainings }) => {
    const upcoming = trainings.filter(t => t.status === "Upcoming");

    return (
        <div className="calendar">
            <h3>Upcoming Trainings</h3>
            <ul>
                {upcoming.map(t => (
                    <li key={t.id}>{t.date} - {t.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarView;
