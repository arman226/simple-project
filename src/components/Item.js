import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/color.styles";

const Item = ({ title, component, onClickListener }) => {
  const classes = useStyles();
  return (
    <NavItem onClick={onClickListener}>
      <NavLink
        tag={Link}
        className={["text-dark", classes.title]}
        to={component}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontSize: 19,
    fontFamily: "Pathway Gothic One",
    color: COLORS.WHITE,
  },
}));

export default Item;
