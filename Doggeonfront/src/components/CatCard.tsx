import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import type { Cat } from "../types/cats";

interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {cat.name}
        </Typography>
        <Typography color="text.secondary">
          Age: {cat.age}
        </Typography>
        <Typography color="text.secondary">
          Breed: {cat.breed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CatCard;
