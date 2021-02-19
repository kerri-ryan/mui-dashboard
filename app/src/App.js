/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import {
  makeStyles,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Paper,
} from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#d3d3d3",
    color: "#FFFFFF",
    margin: "3%",
    "&:hover": {
      border: "3px dotted #77A6F7",
      color: "#77A6F7",
      background: "#fff",
    },
  },
  formControl: {
    margin: "1%",
    minWidth: 120,
  },
}));

function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    region: "",
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setState({
      region: value,
    });
  };

  const data = () => {
    let result = [];
    for (let i = 0; i < 11; i++) {
      let obj = {
        region: "Northeast",
        date: new Date(2021, i, 1).toDateString().slice(4),
        servers: Math.floor(Math.random() * 500) + 500,
        storage: Math.floor(Math.random() * 500) + 30,
      };
      result.push(obj);
    }
    for (let i = 0; i < 11; i++) {
      let obj = {
        region: "Southwest",
        date: new Date(2021, i, 1).toDateString().slice(4),
        servers: Math.floor(Math.random() * 500) + 500,
        storage: Math.floor(Math.random() * 500) + 30,
      };
      result.push(obj);
    }
    for (let i = 0; i < 11; i++) {
      let obj = {
        region: "West",
        date: new Date(2021, i, 1).toDateString().slice(4),
        servers: Math.floor(Math.random() * 500) + 500,
        storage: Math.floor(Math.random() * 500) + 30,
      };
      result.push(obj);
    }
    for (let i = 0; i < 11; i++) {
      let obj = {
        region: "Southeast",
        date: new Date(2021, i, 1).toDateString().slice(4),
        servers: Math.floor(Math.random() * 500) + 500,
        storage: Math.floor(Math.random() * 500) + 30,
      };
      result.push(obj);
    }
    for (let i = 0; i < 11; i++) {
      let obj = {
        region: "Midwest",
        date: new Date(2021, i, 1).toDateString().slice(4),
        servers: Math.floor(Math.random() * 500) + 500,
        storage: Math.floor(Math.random() * 500) + 30,
      };
      result.push(obj);
    }

    return result;
  };

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel>Select Region</InputLabel>
              <Select
                value={state.region}
                id="regionSelector"
                name="region"
                onChange={handleChange}
              >
                <MenuItem value="Northeast">Northeast</MenuItem>
                <MenuItem value="Southwest">Southwest</MenuItem>
                <MenuItem value="West">West</MenuItem>
                <MenuItem value="Southeast">Southeast</MenuItem>
                <MenuItem value="Midwest">Midwest</MenuItem>
              </Select>
            </FormControl>
            <ResponsiveContainer height={300}>
              <LineChart
                width={500}
                height={300}
                data={data().filter((x) => x.region === state.region)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="servers"
                  stroke="#003366"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="storage" stroke="#00887A" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
