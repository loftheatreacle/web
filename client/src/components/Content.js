import React from 'react';
import AboutMe from './Content_AboutMe';
import Contact from './Content_Contact';
class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {content: ""};
    }
    componentDidMount(){
        this.setState({content: this.props.match.params.content})
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.content !== this.props.match.params.content){
            this.setState({content: this.props.match.params.content});
        }
    }
    render() {
        let content = "";
        switch(this.state.content){
            case "aboutme":
                content = AboutMe;
                break;
            case "contact":
                content = Contact;
                break;
        }
        return (
            <div id="contentgridwrapper">
                <div id="contentwrapper">
                    {content}
                </div>
            </div>
        );
        }
}
export default Content;