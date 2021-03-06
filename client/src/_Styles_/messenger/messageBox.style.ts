import { styled } from "@mui/material/styles";
export const ContainerStyle = styled("div")(() => ({
  height: "100%",
  width: "100%",
}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
  height: "440px",
  [theme.breakpoints.down("lg")]: {
    height: "390px",
  },
  overflowY: "scroll",
}));

export const MessageContenterStyle = styled("div")(
  ({ own }: { own: string }) => ({
    display: "flex",

    justifyContent: own === "true" ? "flex-end" : "flex-start",
  })
);
export const MessageText = styled("p")(({ own }: { own: string }) => ({
  padding: "10px",
  borderRadius: "20px",
  color: own === "true" ? "black" : "white",
  maxWidth: "300px",
  backgroundColor: own === "true" ? "rgb(245,241,241)" : "#1877f2",
}));
export const MessageUtilsStyle = styled("p")(({ own }: { own: string }) => ({
  fontSize: "12px",
  fontFamily: "Helvetica",
  textDecorationLine: "underline",

  margin: own === "true" ? "auto 10px auto auto" : "auto auto auto 10px",
}));

export const MessageWrapperStyle = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-end",
  margin: "7px",
}));
export const AvatarStyle = styled("div")(({ own }: { own: string }) => ({
  margin: own === "true" ? "auto 10px 0 7px" : "0 7px",
}));

export const StartChatStyle = styled("div")(() => ({
  minHeight: "79vh",
  fontWeight: "bold",
  fontSize: "40px",
  opacity: "0.5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  cursor: "default",
}));
export const HeaderContainerStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  borderBottom: "4px solid #99ccff",
  backgroundColor: "#f2f2f2",
}));
