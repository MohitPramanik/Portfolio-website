function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mohitpramanik548@gmail.com",
        Password : "2F56E79A21BFE12F48958047DD2EF0059DDE",
        To : 'mohitpro001@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}