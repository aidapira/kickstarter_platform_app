import React from "react";
import BusinessCard from "./card";
import { Grid } from "@material-ui/core";
import { fetchBusinesses } from "../controllers/fetchBusinesses.ts";

class ViewPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
    }

    async componentDidMount() {
        let businesses = await fetchBusinesses();
        this.setState({ businesses: businesses})
    }

    render() { 
        return (
            <Grid container style={styles.gridContainer} spacing={4}>
                {this.state.businesses.map((business, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}
                        >
                        <BusinessCard 
                            index={index}
                            businessName={business.name} 
                            businessDescription={business.description} 
                            businessInspiration={business.inspiration} 
                        />
                    </Grid>
                ))}
            </Grid> 
        )
    }
}

const styles = {
    gridContainer: {
        padding: "40px 60px 20px 60px",
        width: "100%"
    },
    
}
 
export default ViewPosts;