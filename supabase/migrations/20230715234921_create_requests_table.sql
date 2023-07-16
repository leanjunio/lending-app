CREATE TABLE Requests (
    id SERIAL PRIMARY KEY,
    borrower_id INTEGER,
    instrument_id INTEGER,
    status VARCHAR(50) DEFAULT 'Pending',
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (borrower_id) REFERENCES Users(id),
    FOREIGN KEY (instrument_id) REFERENCES Instruments(id)
);