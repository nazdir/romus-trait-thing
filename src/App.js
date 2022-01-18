import { Grid, ListItem, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { Create } from "./modals/Create.js";
import { Base } from "./pages/Base.js";
import { Import } from "./pages/Import.js";
import { Verify } from "./pages/Verify.js";
import "./style.css";

export default function App() {
  const [page, setPage] = useState("upload");
  const [open, setOpen] = useState(false);

  const steps = [
    { name: "Base", component: <Base /> },
    { name: "Import", component: <Import /> },
    { name: "Create Pricing Rules", onClick: () => setOpen(true) },
    { name: "Verify", component: <Verify /> },
  ];

  return (
    <>
      <Grid container direction="row">
        <Grid item style={{ flexShrink: 1 }}>
          {steps.map((o) => (
            <ListItem
              key={o.name}
              button
              onClick={o.onClick ? o.onClick : () => setPage(o.name)}
            >
              <ListItemText>{o.name}</ListItemText>
            </ListItem>
          ))}
        </Grid>
        <Grid item style={{ padding: "32px" }} justify="center">
          {steps.map((s) => (
            <div key={s.name}>{page === s.name && s.component}</div>
          ))}
        </Grid>
      </Grid>

      <Create open={open} setOpen={setOpen} />
    </>
  );
}
