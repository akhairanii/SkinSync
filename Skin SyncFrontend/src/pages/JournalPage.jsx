import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../styles/journal.css";

export default function JournalPage() {
    const [condition, setCondition] = useState("");
    const [mood, setMood] = useState("");
    const [notes, setNotes] = useState("");
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem("skinJournal")) || [];
        setEntries(savedEntries);
        }, []);

    const saveJournal = () => {
        if (!condition || !mood || !notes) {
            alert("Lengkapi semua data terlebih dahulu!");
            return;
            }
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            condition,
            mood,
            notes,
            };
        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem("skinJournal", JSON.stringify(updatedEntries));
        };
    return(
        <div>
            <div className="journal-history">
                <h2>Journal History</h2>
                {entries.length === 0 ? (
                    <p>Belum ada catatan.</p>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry.id} className="journal-card">
                                <h3>{entry.date}</h3>
                                <p>
                                    <strong>Condition:</strong> {entry.condition}
                                    </p>
                                    <p><strong>Mood:</strong> {entry.mood}
                                    </p>
                                    <p><strong>Notes:</strong> {entry.notes}
                                    </p>
                                    </div>
                    ))
                )}
            </div>
        </div>
    );
}