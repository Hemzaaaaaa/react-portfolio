import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import jsonp from "jsonp";

const MAILCHIMP_URL = "https://gmail.us22.list-manage.com/subscribe/post-json?u=e549044309c5c17ecf3d404a0&id=fb84ca3e92";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    if (email && email.indexOf("@") > -1) {
      jsonp(
        `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`,
        { param: "c" },
        (err, data) => {
          if (err) {
            setStatus("error");
            setMessage("An error occurred while subscribing. Please try again.");
          } else if (data.result !== "success") {
            setStatus("error");
            setMessage(data.msg || "An unexpected error occurred.");
          } else {
            setStatus("success");
            setMessage("Thank you for subscribing!");
            setEmail(""); // Clear the email input field
          }
        }
      );
    } else {
      setStatus("error");
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br />
              & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
