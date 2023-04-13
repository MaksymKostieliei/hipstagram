import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../../containers/Header';
import Users from './Users';
import User from './User';
import Post from "./Post";
import Profile from "./Profile";

const Application = () => (
    <main>
        <Header/>
        <Routes path="/">
            <Route index element={<h1>Feed</h1>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="users/:userId" element={<User/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="post/:postId" element={<Post/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </main>
)

export default Application;




