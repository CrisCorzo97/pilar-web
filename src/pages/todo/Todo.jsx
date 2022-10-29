import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, editTask } from "../../redux/slides/taskSlide";
import { theme } from "../../theme";
import { PAGES_ROUTES } from "../../constants/routes.constants";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToForm = () => {
    navigate(`/${PAGES_ROUTES.CREATE_TASK}`, { replace: true });
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleGoToEdit = (id) => {
    navigate(`/${PAGES_ROUTES.EDIT_TASK}/${id}`, { replace: true });
  };

  const handleSwitch = (task) => {
    dispatch(editTask({ ...task, done: !task.done }));
  };

  return (
    <Box width="100%">
      <Grid container mb={2} flexDirection="row">
        <Grid item md={10}>
          <Typography variant="h4">Lista de tareas</Typography>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.dark }}
            onClick={handleGoToForm}
          >
            Agregar tarea
          </Button>
        </Grid>
      </Grid>

      <Grid container gridTemplateColumns={4} columnGap={3} rowGap={3}>
        {tasks.map((task) => (
          <Card sx={{ minWidth: 250, borderRadius: 2 }} key={task.id}>
            <CardHeader
              title={task.name}
              sx={{ borderBottom: "1px solid lightgray" }}
            />
            <CardContent>
              <Typography variant="body1" mb={2}>
                {task.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">Completada</Typography>
                <Switch
                  checked={task.done}
                  onChange={() => handleSwitch(task)}
                  color="secondary"
                />
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                sx={{ color: theme.palette.primary.dark }}
                onClick={() => handleGoToEdit(task.id)}
                size="small"
                variant="outlined"
              >
                Editar
              </Button>
              <Button
                sx={{ backgroundColor: theme.palette.primary.dark }}
                onClick={() => handleDelete(task.id)}
                size="small"
                variant="contained"
              >
                Borrar
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
export default Todo;
