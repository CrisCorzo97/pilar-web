import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slides/loadingSlide";
import api from "../../services/api";
import POKE_IMG from "../../assets/images/poke.png";
import { theme } from "../../theme";
import PokemonCard from "./components/PokemonCard";
import DetailCard from "./components/DetailCard";

const FetchList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);
  const [dialog, setDialog] = useState({
    isOpen: false,
    pokemonData: {},
  });

  const dispatch = useDispatch();

  const handleClickOpen = async (item) => {
    try {
      dispatch(setLoading(true));

      const result = await api.GET(item.url);
      console.log(result);

      setDialog({ isOpen: true, pokemonData: result });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleClose = () => {
    setDialog({ isOpen: false, pokemonData: {} });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const loadMore = async () => {
    try {
      dispatch(setLoading(true));
      const result = await api.GET(next);
      if (result) {
        setPokemons((prev) => [...prev, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getPokemons = async () => {
    try {
      dispatch(setLoading(true));
      const result = await api.GET(api.pokemons);
      if (result) {
        setPokemons(result.results);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Mi Pokedex
        </Typography>
      </Grid>
      {pokemons &&
        pokemons.map((p, index) => {
          return (
            <Grid item xs={4} key={index}>
              {<PokemonCard item={p} openDialog={handleClickOpen} />}
            </Grid>
          );
        })}
      <Grid item xs={4}>
        <Card
          p={2}
          sx={{
            display: "flex",
            height: 100,
            cursor: "pointer",
            backgroundColor: theme.palette.primary.dark,
            "&:hover": { backgroundColor: theme.palette.primary.main },
          }}
          onClick={() => loadMore()}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ color: "white" }}>
              Cargar Más
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, p: 2 }}
            image={POKE_IMG}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      {dialog.isOpen && (
        <DetailCard
          open={dialog.isOpen}
          data={dialog.pokemonData}
          onClose={handleClose}
        />
      )}
    </Grid>
  );
};
export default FetchList;
