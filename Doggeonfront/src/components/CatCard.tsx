import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import type { Cat } from "../types/cats";
import Photo from "../photo/photo_2025-10-03_23-06-00.jpg";


interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <Card sx={{ maxWidth: 275, marginBottom: 2 }}>
      <CardContent>
   <Avatar alt="Remy Sharp" src={Photo} />
        <Typography variant="h5" component="div">
          {cat.name}
        </Typography>

        <Typography color="text.secondary">
          Сообщение: {cat.breed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CatCard;
