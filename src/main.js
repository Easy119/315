import React, { Component } from 'react';
import { render } from 'react-dom';
import MyButtonController from "./components/MyButtonController"
import App from "./App"

render(
    <MyButtonController></MyButtonController>,
    document.getElementById("app")
)