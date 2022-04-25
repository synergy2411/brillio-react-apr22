import React from 'react';

interface PropType {
    children : React.ReactNode
}

interface StateType  { hasError : boolean}

class ErrorBoundary extends React.Component <PropType,StateType> {

    constructor(props : PropType) {
        super(props);
        this.state = {
            hasError : false
        }
    }

    static getDrivedStateFromError(error : Error){
        return { hasError: true };
    }

    componentDidCatch(error : Error){
        console.log("[COMPONENT DID CATCH]", error)
        this.setState({
            hasError : true
        })
    }

    render(): React.ReactNode {
        if(this.state.hasError){
            return <h4>Error Catched</h4>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;