import React from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import AdminAdd from '../../components/AdminSidebar/AdminAdd'
import AdminAnalysis from '../../components/AdminSidebar/AdminAnalysis'
import { useState } from 'react';

const Admin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [current, setCurrent] = useState('Add Records');
  return (
    <>
    <div className='flex'>
    <AdminSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} current={current} setCurrent={setCurrent}/>
    <div className='h-full w-full'>
    <AdminAdd isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} current={current} setCurrent={setCurrent}/>
    <AdminAnalysis isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} current={current} setCurrent={setCurrent}/>
    </div>
    
    </div>
    
    </>
    
  )
}

export default Admin