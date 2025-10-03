import React, { useState } from "react";
import { addNewCat } from "../store/Catsstore";
import { Button, TextField, Box, Alert, Paper } from "@mui/material";
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
    setMessage(`Успешно создано сообщение!`);
    setName("");
    setAge(0);
    setBreed("");
  };

  return (
    <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 500,
            zIndex: 1000,
            backgroundColor: "#f7f7f7",
            padding: 3,
      }}
    >
      <Paper
        sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: 2,
        }}
      >
        <TextField
            variant="outlined"
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            sx={{ mb: 3 }}
        />

        <TextField
            variant="outlined"
            label="Сообщение"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
            fullWidth
            sx={{ mb: 3 }}
        />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
                width: "100%",
                height: 50,
                borderRadius: 1,
                textTransform: "none",
            }}
            endIcon={<SendIcon />}
            >
            Отправить на стену
            </Button>

        {message && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            sx={{
              mt: 2,
              borderRadius: 1,
              backgroundColor: "#d4edda",
              color: "#155724",
            }}
          >
            {message}
          </Alert>
        )}
      </Paper>
    </Box>  
  );
};

export default AddCatForm;