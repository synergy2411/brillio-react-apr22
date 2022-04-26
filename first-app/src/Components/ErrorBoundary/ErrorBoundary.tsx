import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(err : Error){
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong!!!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



// interface PropType {
//     children : React.ReactNode
// }

// interface StateType  { hasError : boolean}

// class ErrorBoundary extends React.Component <PropType,StateType> {

//     constructor(props : PropType) {
//         super(props);
//         this.state = {
//             hasError : false
//         }
//     }

//     static getDrivedStateFromError(error : Error){
//         console.log("getDrivedStateFromError");
        
//         return { hasError: true };
//     }

//     componentDidCatch(error : Error){
//         console.log("[COMPONENT DID CATCH]", error)
//         this.setState({
//             hasError : true
//         })
//     }

//     render(): React.ReactNode {
//         console.log("render");
        
//         if(this.state.hasError){
//             return <h4>Error Catched</h4>
//         }
//         return this.props.children;
//     }
// }

// export default ErrorBoundary;