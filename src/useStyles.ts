import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles: any = makeStyles<Theme>((theme) =>
  createStyles({
    appContainer: {
      width: "100%",
      maxWidth: "inherit",
      marginBottom: "10rem",
    },
    calculatorBox: {
      width: "fit-content",
      margin: "auto",
    },
    displayField: {
      color: "#fff",
      backgroundColor: theme.palette.grey[400],
      fontWeight: "bold",
      height: "3em",
      textAlign: "right",
      fontSize: "24px",
    },
    buttonPanel: {
      marginBottom: "2rem",
    },
    buttonStack: {
      borderTop: "1px solid",
      "&:last-child": {
        borderBottom: "1px solid",
      },
    },
    buttons: {
      fontSize: "24px",
      color: "#000",
      borderRight: "1px solid",
      borderRadius: 0,
      width: "25%",
      backgroundColor: theme.palette.grey[200],
      "&:last-child": {
        borderRight: "none",
        backgroundColor: theme.palette.warning.light,
      },
      "&.wide": {
        width: "50%",
      },
    },
    contentBox: {
      margin: "3rem 0 3rem 0",
      paddingTop: "2rem",
    },
  })
);
