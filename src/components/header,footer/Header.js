import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    draweOpen: false,
    headerShow: false
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.pageYOffset > 0) {
      this.setState({
        ...this.state,
        headerShow: true
      });
    } else {
      this.setState({
        ...this.state,
        headerShow: false
      });
    }
  };

  toggleDrawer = value =>
    this.setState({
      ...this.state,
      draweOpen: value
    });

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            area-label="Menu"
            color="inherit"
            onClick={() => {
              this.toggleDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.draweOpen}
            onClose={value => this.toggleDrawer()}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
