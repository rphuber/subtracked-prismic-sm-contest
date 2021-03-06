// pages/_app.js
import React from "react";
import NextApp from "next/app";

import { theme } from "essential-slices";

import { ThemeProvider, BaseStyles } from "theme-ui";

import "../styles/globals.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
