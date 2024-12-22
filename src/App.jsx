import React from "react";
import Button from "./Components/Button/Button";
import Student from "./Components/Student/Student";
import "./App.css"
import Card from "./Components/Card/Card";
import UserCard from "./Components/conditionalRendering/UserCard";

const App = () => {
  return (
    <>
<UserCard/>
    <Card />
      <h1>App Component</h1>
      <Button btnName = "Login"/>
      <Button btnName = "SignUp"/>
      <Button btnName = "Search"/>
      <Button btnName = "FeedBack"/>
      <Button btnName = "Delete"/>
      <div className="StudentCards">

     
    <Student stdName = "Ali" stdAge = {20} isStudent ={true} />
    <Student stdName = "Farooq" stdAge = {23} isStudent ={false} />
    <Student stdName = "Ahmed" stdAge = {25} isStudent ={true} />
    <Student  />
    </div>
    {/* {there are three ways to apply css in jsx element}
    1)Inline css 
    2) External css
    3) Module css*/}
    </>
  );
};

export default App;
