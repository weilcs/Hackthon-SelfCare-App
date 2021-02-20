import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "views/Components/Sections/SectionBasics.js";
import SectionNavbars from "views/Components/Sections/SectionNavbars.js";
import SectionTabs from "views/Components/Sections/SectionTabs.js";
import SectionPills from "views/Components/Sections/SectionPills.js";
import SectionNotifications from "views/Components/Sections/SectionNotifications.js";
import SectionTypography from "views/Components/Sections/SectionTypography.js";
import SectionJavascript from "views/Components/Sections/SectionJavascript.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import SectionCompletedExamples from "views/Components/Sections/SectionCompletedExamples.js";
import SectionLogin from "views/Components/Sections/SectionLogin.js";
import SectionExamples from "views/Components/Sections/SectionExamples.js";
import SectionDownload from "views/Components/Sections/SectionDownload.js";
import FocusSection from "views/OptionSections/FocusSection.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(0),
  },
}));

export default function HomePage(props) {

  const classes = useStyles();
  const { ...rest } = props;
  const [spacing, setSpacing] = React.useState(2);
  const gridClasses = gridStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <div>
      <Header
        brand="Self Care"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <GridItem md={12} className={classes.textCenter}>  
          <FocusSection/>
      </GridItem>

    
      <div className={classNames(gridClasses.main, gridClasses.mainRaised)}>
        <SectionCarousel />
      </div>
      <Footer />
    </div>
  );
}
