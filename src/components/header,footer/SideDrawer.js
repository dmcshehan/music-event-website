import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("start")}>
          <ListItemText primary="Events Start" />
        </ListItem>
        <ListItem button onClick={() => scrollToElement("venueinfo")}>
          <ListItemText primary="Venue Info" />
        </ListItem>
        <ListItem button onClick={() => scrollToElement("highlights")}>
          <ListItemText primary="Highlights" />
        </ListItem>
        <ListItem button onClick={() => scrollToElement("pricing")}>
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button onClick={() => scrollToElement("location")}>
          <ListItemText primary="Location" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
