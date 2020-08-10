import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    
    
    // @WireUp GApi
    componentDidMount(){
        window.gapi.load("client: auth2", () => {
            
            window.gapi.client.init({
                clientId: '947299159026-sfr6ke5s6ptcp8kvqqacjd4tva4q10ue.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();                
                //@Update Auth Global State
                this.onAuthChange(this.auth.isSignedIn.get())
                // Get user Status without refreshing the page
                this.auth.isSignedIn.listen( this.onAuthChange )
            });
        });        
    }
        
    //@REFACTO REDUX
    onAuthChange = isSignedIn => {
        const { signIn, signOut } = this.props;
        if ( isSignedIn ){
            signIn(this.auth.currentUser.get().getId());
        }else{
            signOut();
        }
    }

    renderAuthStatus = () => {
        if (this.props.isSignedIn === null){
            return null;
        }else if (this.props.isSignedIn){
            return (                
                <div className="item header-btn signout" onClick={ this.onSignOut }>
                    <i className="google icon red"></i> <span>Sign Out</span>
                </div>           
            )
        } else {
            return(                
                <div className="item header-btn signin" onClick={ this.onSignIn }>
                    <i className="google icon blue"></i> <span>Sign In</span>
                </div>               
            )
        }
    }

    onSignIn= () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    render() { 
        return ( 
            <div>{ this.renderAuthStatus() }</div>
        );
    }
}

const MapStateToProps = state => {
    console.log("INITIAL_STATE", state);
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect( MapStateToProps, {
    signIn,
    signOut
})(GoogleAuth);