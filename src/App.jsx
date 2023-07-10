import { useState } from "react";
import ArticleList from "./Components/ArticleList/ArticleList";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

export default function App() {

  const [user, setUser] = useState();
  
  const submitForm = (user) => {
    setUser(user)
  }

  return (
    <div className="h-screen">
      <Header user={user}/>
      { !!user && <ArticleList/> }
      { !!user || <Form onSubmit={submitForm} /> }
    </div>
  )
}
