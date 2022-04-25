import React , { useState , useEffect , useContext } from 'react';
import { auth } from './../FireBase/firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from "axios";

// components 
import Navbar from '../Navbar/Navbar';

// styles
import styles from "./Chats.module.css";

// context 
import { AuthContext } from "../../contexts/AuthContextProvider";


const Chats = () => {

    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me" , {
            headers : {
                "project-id" : "2574b546-a391-4d29-ab0d-a98b453a5cd6",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(() => {setLoading(false)})
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email" , user.email);
            formdata.append("username" , user.email);
            formdata.append("secret" , user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar" , avatar , avatar.name)
                    axios.post("https://api.chatengine.io/users/" , formdata , {
                        headers : {
                            "private-key" : "dc993207-192c-498d-a740-546ca6920257"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    },[user , history])

    // Avatar User
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data] , "userPhoto.jpg" , {type : "image/jpeg"})
    }


    const logOutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    if (!user || loading) return "... در حال دریافت اطلاعات از سرور"

    return (
        <div className={styles.container}>
            <Navbar logOutHandler = {logOutHandler} />

            <ChatEngine 
                height = "calc(100vh - 90px)"
                projectID = "2574b546-a391-4d29-ab0d-a98b453a5cd6"
                userName = {user.email}
                userSecret ={user.uid}
            />
        </div>
    );
};

export default Chats;