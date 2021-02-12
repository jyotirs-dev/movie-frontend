import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';
import classes from './Layout.module.css';

class Layout extends Component{
    
    
    render(){
        return(
            <>
                <Toolbar/>
                <main className= {classes.Content}>
                    {this.props.children}
                </main>
            </>
            )
    }
    
    
}



export default Layout;