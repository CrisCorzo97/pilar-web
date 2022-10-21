import { Avatar, Card, CardHeader, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`, { replace: true });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
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

      <Grid item xs={6}>
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
