import React, { Component } from 'react'
import '../styles/Contact.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach((val) => {
      val === null && (valid = false);
    });
  
    return valid;
    };
export class Contact extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: null,
          email: null,
          subject: null,
          message: null,
          number:null,
          formErrors: {
            name: "",
            email: "",
            subject: "",
            message: "",
            number:"",
          },
        };
      }

      handleSubmit = (e) => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          e.preventDefault();
    
          emailjs.sendForm('gmail', 'temp', e.target, 'user_kHDhWXEmxvlJuSZF7ezik')
          .then((result) => {
              console.log(result.text);
              alert('Thankyou! Your Query has been submitted successfully :)')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
      handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
          case "name":{
                if(value.length < 3){
                    formErrors.name = "Minimum 3 characters required!!!";
                    document.getElementById("myBtn").disabled = true;
                    document.getElementById("myBtn").style.backgroundColor="black";
                }
                else{
                    formErrors.name="";
                }
            break;
          }
            
          case "message":{
                if(value.length < 6){
                    formErrors.message = "Minimum 6 characters required!!!";
                    document.getElementById("myBtn").disabled = true;
                    document.getElementById("myBtn").style.backgroundColor="black";
                }
                else{
                    formErrors.message="";
                    document.getElementById("myBtn").disabled = false;
                    document.getElementById("myBtn").style.backgroundColor="green";
                }
            break;
          }
           
          case "email":{
            if(emailRegex.test(value)){
                formErrors.email = "";
            }
            else{
                formErrors.email="Invalid email address!!!";
                document.getElementById("myBtn").disabled = true;
                document.getElementById("myBtn").style.backgroundColor="black";
            }
        break;
      }
          case "number":{
            if(value.length < 10){
                formErrors.number = "Minimum 10 characters required!!!";
                document.getElementById("myBtn").disabled = true;
                document.getElementById("myBtn").style.backgroundColor="black";
            }
            else{
                formErrors.number="";
            }
        break;
      }
            case "subject":{
                if(value.length < 3){
                    formErrors.subject = "Minimum 3 characters required!!!";
                    document.getElementById("myBtn").disabled = true;
                    document.getElementById("myBtn").style.backgroundColor="black";
                }
                else{
                    formErrors.subject="";
                    
                }
            break;
          }

          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    render() {
        const { formErrors } = this.state;
        return (
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <h2><LocationOnIcon fontSize="large"/>  Locate us at</h2>
                            <p className="p_tag">9/32, Pillayar Kovil Street,<br />
                                Kattor, Ram Nagar,<br />
                                Coimbatore-641 009,<br /> 
                                Tamilnadu
                            </p>
                            <br />
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <h2><CallIcon fontSize="large" />  Call us at</h2>
                            <a className="p_tag" href="tel:+919994578699">+91-9994578699</a> <br />
                            <a className="p_tag" href="tel:+919600934969">+91-9600934969</a> <br />
                            <a className="p_tag" href="tel:0422-4384699">0422-4364699</a>
                            <br />
                            <br />
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <h2><EmailIcon fontSize="large"/>  Mail us at</h2>
                            <p className="p_tag">royaltoolscbe@yahoo.com <br />
                                supertoolscbe@gmail.com
                            </p>
                        </div>
                    </div>
                    <h2 style={{textAlign:"center"}}><SendIcon fontSize="large" /> Get in touch</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 contact_box">
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <input type="text" class="form-control" placeholder="Name" name="name" onChange={this.handleChange} />
                                        {formErrors.name.length > 0 && (
                                            <span className="errorMessage">{formErrors.name}</span>
                                        )}
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6 space">
                                        <input type="text" class="form-control" placeholder="Email-address" name="email" onChange={this.handleChange}/>
                                        {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                        <input type="text" class="form-control" placeholder="Mobile" name="number" onChange={this.handleChange}/>
                                        {formErrors.number.length > 0 && (
                                            <span className="errorMessage">{formErrors.number}</span>
                                        )}
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-6 space">
                                        <input type="text" class="form-control" placeholder="Subject" name="subject" onChange={this.handleChange}/>
                                        {formErrors.subject.length > 0 && (
                                            <span className="errorMessage">{formErrors.subject}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="row text_area">
                                    <textarea class="form-control" rows="5" placeholder="Your Query" aria-label="With textarea" name="message" onChange={this.handleChange}></textarea>
                                    {formErrors.message.length > 0 && (
                                            <span className="errorMessage">{formErrors.message}</span>
                                        )}
                                </div>
                                <div className="row">
                                    <button id="myBtn" type="submit" class="button button-3 button-3e icon-arrow-right btn_" disabled><i class="fa fa-arrow-right"></i>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <h2 style={{textAlign:"center"}}>Follow us at</h2>
                    
                        
            
                </div>
                <div className="icons">
                    <br />
                    <a href="https://www.facebook.com/Royal-tools-and-hardwares-107428741185009/" target="_blank">
                        <i className="fab fa-facebook-f icon_fb"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+91-9600934969" target="_blank">
                        <i className="fab fa-whatsapp icon_whatsapp"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact
