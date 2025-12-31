import './css/contact.css'
import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
const Contact = ()=>{
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const {sent, isSent} = useRef(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
    
    
        emailjs.sendForm(
            'service_lilpzwm',
            'template_5ni61m1',
            form.current,
            'ebhmzcEP9blM9bQre'
        ).then((result)=>{
            console.log(result.text);
            e.target.reset();
            
        },(error)=>{
            alert("Oops! Something went wrong");
            return;
        }).finally(()=>{
            setIsSending(false);
            document.querySelector('#sendStatus').classList.toggle('sent');
            setTimeout(() => {
                document.querySelector('#sendStatus').classList.toggle('sent');

                
            }, 5000);
        })
    }

    
    
    
    return(
        <>
        
        <div id="contact">
            <h1 className='topic emy'>Contact</h1>
            <h3>
                 Lets talk!
            </h3>

            <div id='sendStatus'>
                <em>Email sent successfully</em>
            </div>

            <div id="formContainer">
                
            <form ref={form} id='contactForm' onSubmit={sendEmail}>
                <label htmlFor="user_name">Your Name:

                </label><br></br>
                <input className="contactInput" type="text" name='user_name' id="user_name" required></input><br></br>

                <label htmlFor="user_email">  Email:                  
                </label><br/>
                <input className="contactInput" id="user_email" name="user_email" required type="email"></input><br/>

                <label htmlFor="message">Message:
                    </label><br></br>               
                <textarea id="user_message" name="message" maxLength={10000} required></textarea>

                <button type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send"}
                </button>           

            </form>


            </div>
            
            

        </div>
        
           
        </>

    )
}

export default Contact;