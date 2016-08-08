import {el, div, RenderToDom, Component, Props} from "react-tsx";

interface ExampleProps extends Props{

}

interface ExampleState{

}


class Example extends Component<ExampleProps, ExampleState>{
  render(){
    return (
      div({className:"example", style:{width:200, height:300, backgroundColor:"green"}},
        div({className:"example", style:{width:100, height:300, margin:"auto", backgroundColor:"pink"}})
    )
    )
  }
}

RenderToDom(el(Example, {}), document.getElementById("example"))
