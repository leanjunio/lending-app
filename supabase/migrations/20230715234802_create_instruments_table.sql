CREATE TABLE Instruments (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER,
    name VARCHAR(100),
    description TEXT,
    instrument_type VARCHAR(50),
    rate DECIMAL(9,2),
    availability VARCHAR(50) DEFAULT 'Available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);