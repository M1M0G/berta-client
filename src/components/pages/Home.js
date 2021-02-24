import { Button } from 'antd';
import axios from 'axios';
import { isAction } from 'mobx';
import React from 'react';
import PageLayout from '../layout/PageLayout';

const Home = ({location: {pathname}, isAuth }) => {
  console.log(isAuth)
  if (pathname !== '/') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <h1>Home</h1>
      <Button onClick = {() => {axios.get('http://localhost:8000/api').then(res => console.log(res))}}>Проверка</Button>
    </PageLayout>
  );
}


export default Home;
