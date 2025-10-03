import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { addCat } from "../service/catService";

const AddCatForm: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await addCat(name, age, breed);

        if (result) {
            setMessage(`Котик добавлен: ${name}`);
            setName("");
            setAge(0); 
            setBreed("");
        } else {
            setMessage("Ошибка при добавлении котика");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Add new cat
            </Typography>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Cat
            </Button>
            {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
        </Box>
    );
};

export default AddCatForm;
