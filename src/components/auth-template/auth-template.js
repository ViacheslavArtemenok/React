import { makeStyles } from "@material-ui/core"
export function AuthTemplate({ children, link }) {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      {children}
      <div className={styles.link}>{link}</div>
    </div>
  )
}
const useStyles = makeStyles(() => {
  return {
    link: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
      color: "#000",
    },
    root: {
      width: "500px",
      margin: "0px auto",
      marginTop: "10%",
    },
  }
})
