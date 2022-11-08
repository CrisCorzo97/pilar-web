import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailCard = ({ open, data, onClose }) => {
  const firstMoves = data.moves.slice(0, 5);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        onClose={onClose}
      >
        <DialogTitle sx={{ fontSize: 24 }}>{data.name}</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
          >
            <Box
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "70%" }}
                src={`${data.sprites.front_default}`}
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={500} fontSize={20}>
                Habilidades
              </Typography>
              <List>
                {data.abilities.map((a, index) => (
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                    <ListItemText>{a.ability.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
              <Typography fontWeight={500} fontSize={20}>
                Principales movimientos
              </Typography>
              <List>
                {firstMoves.map((m, index) => (
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                    <ListItemText sx={{ margin: 0 }}>
                      {m.move.name}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DetailCard;
