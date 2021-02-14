import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';
import'./Layout.scss';

class Layout extends Component{
    
    
    render(){
        return(
            <>
                <Toolbar/>
                <main className= "Content">
                    {this.props.children}
                </main>
            </>
            )
    }
    
    
}



export default Layout;