import React from "react";
import { Avatar, Card, CardContent, Box, Typography } from "@mui/material";
import type { Cat } from "../types/cats";
import Photo from "../photo/photo_2025-10-03_23-06-00.jpg";

interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2, maxWidth: 400 }}>
      <Avatar 
        alt={cat.name} 
        src={Photo} 
        sx={{ width: 60, height: 60, flexShrink: 0 }}
      />
      
      <Card sx={{ maxWidth: 275, flexGrow: 1 }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
          <Typography variant="subtitle2" component="div" fontWeight="bold">
            {cat.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cat.breed}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CatCard;