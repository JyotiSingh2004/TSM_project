import React from 'react';

const TrainingTable = ({ trainings, filterMode, filterStatus, search }) => {
    const filtered = trainings.filter(t => {
        const modeMatch = filterMode === "All" || t.mode === filterMode;
        const statusMatch = filterStatus === "All" || t.status === filterStatus;
        const searchMatch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                            t.trainer.toLowerCase().includes(search.toLowerCase());
        return modeMatch && statusMatch && searchMatch;
    });

    return (
        <div className="table-container">
            <h3>Training Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Trainer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mode</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(t => (
                        <tr key={t.id}>
                            <td>{t.title}</td>
                            <td>{t.trainer}</td>
                            <td>{t.date}</td>
                            <td>{t.time}</td>
                            <td>{t.mode}</td>
                            <td>{t.status}</td>
                            <td><button>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainingTable;
