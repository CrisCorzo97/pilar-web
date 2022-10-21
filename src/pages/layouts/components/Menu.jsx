import { List } from "@mui/material";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </List>
  );
};

export default Menu;
