import React from "react";
import BusinessCard from "./card";
import { Grid } from "@material-ui/core";

class ViewPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: [],
            businessDescription: []
        }
    }

    render() { 
        return (
            <Grid container style={styles.gridContainer} spacing={4}>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <BusinessCard />
                </Grid>
            </Grid> 
        )
    }
}

const styles = {
    gridContainer: {
        padding: "40px 60px 20px 60px"
    }
}
 
export default ViewPosts;