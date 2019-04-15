import React, {Component}  from 'react'
import Logo from './Logo.jsx'

class  Footer extends  Component {
        constructor(props){
            super(props);
            this.state = {
                orderedLogos: [
                    // {name: "American Family Voices", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/383c42bf-7f92-4e72-8c00-38b9f9c60ee4/PasAFV.jpg"},
               ]
            }
        }

        componentDidMount(){
        }

        render(){
           
            let logos = null
            let logosText = "Demand Progress, Daily Kos, "
            let tweet = "https://twitter.com/intent/tweet?text=It%27s%20time%20for%20Congress%20to%20pass%20the%20%23SavetheNet%20Act%2C%20which%20will%20restore%20strong%20%23NetNeutrality%20protections%20supported%20by%20an%20overwhelming%20majority%20of%20Americans.%20Tell%20your%20lawmakers%20to%20stand%20with%20their%20constituents%2C%20not%20Big%20Cable%2C%20by%20backing%20this%20bill%3A%20https%3A%2F%2Fstopthefcc.net%2F"
            
            if(this.props.showLogos || !this.props.isMobile){
                    logos = this.state.orderedLogos.map(({name, url}) => {
                        logosText += name + ', ';
                        return <Logo key={name} alt={name} src={url}/>
                        } 
                    )
            }
            
            return (
                <div id="footer">
                    <div className="footer">
                        <div className="logos-unit">
                            <div className="built-by">
                                <p><br/><br/>Built by:</p> <img src="https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/ffb2acc8-9b36-40ef-bb9a-deb6ecb5ee55/demand-progress.png"/>
                                <p><br/><br/>In partnership with:</p> <img src="https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/c7679f4c-3ee7-4670-84a5-b0c4f2f2e2dc/DailyKosLogo.png" alt="Daily Kos" />
                            </div>
                            <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
                                {logos}
                            </div>
                            <div className="media-press-social">
                                <div className="social-media">
                                    <a className="twitter" href={tweet} target="_blank">
                                        <img src="images/twitter_white.svg" />
                                        <span>Share on twitter</span>
                                    </a>
                                    <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://www.stopthefcc.net/" target="_blank">
                                        <img src="images/facebook_white.svg" />
                                        <span>Share on facebook</span>
                                    </a>
                                </div> 
                                <div className="press-inquiries">
                                    <h3>For Press inquiries, please contact us at:</h3>
                                    <p>
                                        <a className="no-em" href="tel:1-202-681-7582">202-681-7582</a> <span style={{ color: 'white' }}>or</span> <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                                    </p>
                                    <br/>
                                    <p>
                                        <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                                    </p>
                                </div>
                            </div>
                            <div className="orgs">{logosText.substring(0, logosText.length-2)}</div>
                        </div>
                    </div>
                </div>);
        }
        
    }

    export default Footer;
