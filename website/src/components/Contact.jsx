import React from "react";

const Contact = (props) => {
    return (
        <div id="contact">
            <div class="left">
                <h2>Let's connect</h2>
                <form action="#">
                    <div>
                        <label for="">Subject</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label for="">Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <div class="right">
                <h2>Find me here</h2>
                <a href="https://github.com/emilio-fv" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="http://www.linkedin.com/in/emiliofv" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
        </div>
    )
}

export default Contact; 