import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IMG_URL } from "../../../services/api";

const PokemonCard = ({ item, openDialog }) => {
  const path = item.url.split("/");

  const getPokemonImgId = (id) => {
    switch (id.length) {
      case 1:
        return `00${id}`;
      case 2:
        return `0${id}`;
      default:
        return id;
    }
  };

  const imgID = getPokemonImgId(path[6]);

  return (
    <Card
      p={2}
      sx={{
        display: "flex",
        height: 100,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#5acdbd", color: "white" },
      }}
      onClick={() => openDialog(item)}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          N° {imgID}
        </Typography>
        <Typography component="div" variant="h5">
          {item.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        src={`${IMG_URL}${imgID}.png`}
        alt="Live from space album cover"
      />
    </Card>
  );
};
export default PokemonCard;
