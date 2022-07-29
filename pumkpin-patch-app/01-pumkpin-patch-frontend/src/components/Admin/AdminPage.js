import React, { Fragment, useEffect, useState, useRef } from "react";
import "firebase/compat";
import firebase from "firebase/compat/app";
import classes from "./AdminPage.module.css";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import emailjs from "@emailjs/browser";

const AdminPage = (props) => {
  const [button, setButton] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedEmail, setSelectedEmail] = useState();
  const [emailActive, setEmailActive] = useState(false);
  const [user, setUser] = useState([
    {
      KidName: "Kids Name",
      Birthdate: "Birthdate",
      Phone: "Phone Number",
      email: "Email",
      Accepted: "Accepted",
      signUpDate: "Sign Up Date",
    },
  ]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      const auth1 = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (auth1.email === "jenifer_drozd@yahoo.com") {
        console.log(auth1.email);
        const ref = firebase
          .app()
          .firestore()
          .collection("Waitlist")
          .orderBy("signUpDate", "asc");
        const snapshot = ref.get().then((QS) => {
          QS.forEach((docs) => {
            setUser((user) => [...user, docs.data()]);
          });
        });
      }
    });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8j7tlkj",
        "template_p839f0s",
        form.current,
        "Vj5SR8l5VMZ25X2cc"
      )
      .then(
        (result) => {
          setEmailActive(false);
          alert("Email has been sent!");
          firebase
            .app()
            .firestore()
            .collection("Waitlist")
            .doc(selected)
            .delete();

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
 
  const enrollHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setSelected(e.target.name);
    setSelectedEmail(e.target.value);
    setButton(true);
    setEmailActive(true);
  };

  if (emailActive) {
    return (
      <Modal>
        <Card>
          <form ref={form} onSubmit={sendEmail}>
            <label>Child's Name</label>
            <input value={selected} type="text" name="KidName" />
            <label>Parent Email</label>
            <input value={selectedEmail} type="email" name="email" />
            <label>Your Email</label>
            <input
              value="christcrom988@gmail.com"
              type="text"
              name="reply_to"
            />
            <input type="submit" value="Send" />
          </form>
        </Card>
      </Modal>
    );
  }


  if (user && !button) {
    console.log(user);
    const data = user.map((e) => {
      if (e.Accepted === "no")
        return (
          <div className={classes.table}>
            <ul className={classes.li}>
              <li>{e.KidName}</li>
              <li>{e.Birthdate}</li>
              <li>{e.Phone}</li>
              <li>{e.email}</li>
              <li>{e.Accepted}</li>
              <li>{e.signUpDate}</li>
              <button
                value={e.email}
                birthdate={e.Birthdate}
                name={e.KidName}
                email={e.email}
                onClick={enrollHandler}
              >
                Enroll
              </button>
            </ul>
          </div>
        );
    });

    return (
      <Fragment>
        <h3 className={classes.table}>{data}</h3>
      </Fragment>
    );
  }
};
export default AdminPage;
