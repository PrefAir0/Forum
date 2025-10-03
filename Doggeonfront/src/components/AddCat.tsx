import React, { useState } from "react";
import { addNewCat } from "../store/Catsstore";
import { Button, TextField, Box, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';

const AddCatForm: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNewCat({ name, age, breed });
    setMessage(`Successfully added cat: ${name}`);
    setName("");
    setAge(0);
    setBreed("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        variant="outlined"
        label="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        sx={{ mb: 5, width: 300 }}
      />

      {/* <TextField
        variant="standard"
        label="Age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        required
        fullWidth
        sx={{ mb: 2 }}
      /> */}

      <TextField
        id="filled-basic"
        variant="standard"
        label="Сообщение"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
        fullWidth
        sx={{ ml: 10 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ ml: 20, width: 20 }}
        endIcon={<SendIcon />}
      >
        Отправить на стену
      </Button>

      {message && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Вы успешно добавили пост!
        </Alert>
      )}
    </Box>
  );
};

export default AddCatForm;
