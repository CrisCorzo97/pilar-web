import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slides/taskSlide";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: null,
    name: "",
    description: "",
    done: false,
  });

  const [error, setError] = useState({ name: "", description: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasksStore = useSelector((state) => state.tasks);

  const { id } = useParams();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (task.name !== "") return (err) => setError({ ...err, name: "" });
    if (task.description !== "")
      return (err) => setError({ ...err, description: "" });
  }, [task]);

  useEffect(() => {
    if (id) {
      setTask(tasksStore.find((task) => task.id === id));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.name) {
      if (!task.description)
        return setError({
          name: "Debes colocar un nombre.",
          description: "Debes escribir una description.",
        });
      else return setError({ ...error, name: "Debes colocar un nombre." });
    }
    if (task.description === "")
      return setError({
        ...error,
        description: "Debes escribir una description.",
      });
    else
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    return navigate("/todo", { replace: true });
  };

  return (
    <Card sx={{ width: "50%" }}>
      <CardHeader title="Agrega una tarea" />
      <CardContent>
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid>
            <Grid item mb={2}>
              <FormControl required error>
                <TextField
                  value={task.name}
                  name="name"
                  label="Nombre"
                  variant="outlined"
                  onChange={handleChange}
                />
                {error.name !== "" && (
                  <FormHelperText>{error.name}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item mb={2}>
              <FormControl required error>
                <TextField
                  value={task.description}
                  name="description"
                  label="Descripción"
                  variant="outlined"
                  onChange={handleChange}
                />
                {error.description !== "" && (
                  <FormHelperText>{error.description}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid mb={2}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              onClick={handleSubmit}
            >
              Agregar
            </Button>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default TaskForm;
