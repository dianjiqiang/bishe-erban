import React, { memo, useEffect, useState } from "react";
import { NavMenuStyle } from "./style";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { shallowEqual, useSelector } from "react-redux";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenu = memo(() => {
  const { MenuItem } = useSelector((state) => {
    return {
      MenuItem: state.home.MenuItem,
    };
  }, shallowEqual);
  const location = useLocation();

  const navigate = useNavigate();
  const [open, setOpen] = useState(MenuItem[0]?.id);
  const [selectedIndex, setSelectedIndex] = useState(
    MenuItem[0]?.children[0].id
  );

  useEffect(() => {
    setSelectedIndex(location.pathname);
    let newLocationPath = "/" + location.pathname.split("/")[2];
    if (newLocationPath === "/techers") {
      newLocationPath = "/teachers";
    }
    setOpen(newLocationPath);
  }, [location]);

  const handleClick = (id) => {
    setOpen(id);
  };
  const changeSelectedIndex = useCallback(
    (id) => {
      setSelectedIndex(id);
      navigate(id);
    },
    [navigate]
  );
  return (
    <NavMenuStyle>
      <List
        sx={{
          width: "100%",
          maxWidth: 240,
          bgcolor: "background.paper",
          height: "100%",
          position: "relative",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <div className="title">
          <img
            className="icon"
            src={require("@/assets/image/react_icon.png")}
            alt=""
          />
          <span className="name" style={{ marginLeft: "13px" }}>
            评教系统
          </span>
        </div>
        {MenuItem.map((item) => {
          let childItem;
          if (item.children) {
            childItem = item.children.map((child) => (
              <Collapse
                in={item.id === open}
                timeout="auto"
                unmountOnExit
                key={child.id}
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    selected={selectedIndex === child.id}
                    onClick={() => changeSelectedIndex(child.id)}
                  >
                    <ListItemText primary={child.title} />
                  </ListItemButton>
                </List>
              </Collapse>
            ));
          }
          return (
            <div key={item.id}>
              <ListItemButton
                onClick={() => handleClick(item.id)}
                sx={{
                  background: open === item.id ? "#00cad7 !important" : "",
                  color: open === item.id ? "white !important" : "",
                }}
              >
                {open === item.id ? <ExpandMore /> : <ExpandLess />}
                <ListItemText
                  sx={{ paddingLeft: "4px" }}
                  primary={item.title}
                />
              </ListItemButton>
              {childItem}
            </div>
          );
        })}
        <img
          className="light"
          src={require("@/assets/image/light_bulb.png")}
          alt=""
        />
      </List>
    </NavMenuStyle>
  );
});

export default NavMenu;
