import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasksDone, setTasksDone] = useState(0);
  const [allTasks, setAllTasks] = useState(0);

  const navigate = useNavigate();

  const taskStore = useSelector((state) => state.tasks);

  const handleNavigate = (path) => {
    navigate(`/${path}`, { replace: true });
  };

  const getTasksDone = () => {
    const tasksDone = taskStore.filter((task) => task.done === true);

    return setTasksDone(tasksDone.length);
  };

  useEffect(() => {
    getTasksDone();
    setAllTasks(taskStore.length);
  }, [taskStore]);

  return (
    <Grid container columnGap={2} rowGap={2} gridTemplateColumns={2}>
      <Grid item md={5}>
        <Card>
          <CardHeader
            title="Tareas completadas"
            sx={{ borderBottom: "1px solid lightgray", textAlign: "center" }}
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">{tasksDone}</Typography>
            <Typography
              variant="h3"
              color="grey"
              sx={{ paddingBottom: 2, fontWeight: 2 }}
            >{`/${allTasks}`}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={5}>
        <Card>
          <CardHeader
            title="Tareas pendientes"
            sx={{ borderBottom: "1px solid lightgray", textAlign: "center" }}
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">{allTasks - tasksDone}</Typography>
            <Typography
              variant="h3"
              color="grey"
              sx={{ paddingBottom: 2, fontWeight: 2 }}
            >{`/${allTasks}`}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={5}>
        <Card
          onClick={() => handleNavigate("todo")}
          sx={{
            cursor: "pointer",
            ":hover": { bgcolor: theme.palette.grey[50] },
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: theme.palette.primary.dark }}
                aria-label="recipe"
              >
                T
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => handleNavigate("todo")}
              >
                <ArrowForwardIosIcon sx={{ color: theme.palette.grey[500] }} />
              </IconButton>
            }
            title="Ir a Todo page"
          />
        </Card>
      </Grid>

      <Grid item md={5}>
        <Card
          onClick={() => handleNavigate("fetch-list")}
          sx={{
            cursor: "pointer",
            ":hover": { bgcolor: theme.palette.grey[50] },
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.grey[600],
                }}
                aria-label="recipe"
              >
                F
              </Avatar>
            }
            action={
              <IconButton
                aria-label="settings"
                onClick={() => handleNavigate("fetch-list")}
              >
                <ArrowForwardIosIcon sx={{ color: theme.palette.grey[500] }} />
              </IconButton>
            }
            title="Ir a FetchList page"
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
