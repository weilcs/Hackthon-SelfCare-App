import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/background.jpg";

const useStyles = makeStyles(styles);

export default function FocusSection(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [checkedA, setCheckedA] = React.useState(false);
  const [checkedB, setCheckedB] = React.useState(false);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>
              <h1 className = {classes.inspirationText}>Don’t Let Yesterday Take Up Too Much Of Today.</h1>
            </GridItem>
            
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Focus</h4>
                  </CardHeader>
                  <p className={classes.divider}>Focus fucntion description blablabla</p>
                  <CardBody>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      START
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Keep Hydrated Alert</h4>
                  </CardHeader>
                  <p className={classes.divider}>hydrated fucntion description blablabla</p>
                  <CardBody>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={checkedA}
                          onChange={event => setCheckedA(event.target.checked)}
                          value="checkedA"
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar
                          }}
                        />
                      }
                      classes={{
                        label: classes.label
                      }}
                      label="Turn on Alert"
                    />
                  </div>

                  </CardFooter>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Get up from your chair</h4>
                  </CardHeader>
                  <p className={classes.divider}>this fucntion description blablabla</p>
                  <CardBody>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <div>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={checkedB}
                            onChange={event => setCheckedB(event.target.checked)}
                            value="checkedB"
                            classes={{
                              switchBase: classes.switchBase,
                              checked: classes.switchChecked,
                              thumb: classes.switchIcon,
                              track: classes.switchBar
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Turn on Alert"
                      />
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>
  );
}
