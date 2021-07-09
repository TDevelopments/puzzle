import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  Jumbotron,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import Load from "../components/Load";
import { Link, useHistory, useLocation } from "react-router-dom";
import user from "../assets/images/user.png";
import { useState, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

export default function LoadingPage() {
  const history = useHistory();
  const location = useLocation();

  return <Load userId={location.state._id} />;
}
