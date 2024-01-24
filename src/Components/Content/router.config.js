import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "../Home/Home";
import Store1 from '../Category/Store1/Store1';
import Store2 from '../Category/Store2/Store2';
import Store3 from '../Category/Store3/Store3';
import Setting1 from "../Setting/Setting1";
import Setting2 from "../Setting/Setting2";
import Setting3 from "../Setting/Setting3";
import Setting4 from "../Setting/Setting4";
import Setting5 from "../Setting/Setting5"
function Content() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Store1" element={<Store1 />}></Route>
      <Route path="/Store2" element={<Store2 />} ></Route>
      <Route path="/Store3" element={<Store3 />}></Route>
      <Route path="/Setting1" element={<Setting1 />} ></Route> 
      <Route path="/Setting2" element={<Setting2 />} ></Route>
      <Route path="/Setting3" element={<Setting3 />}></Route>
      <Route path="/Setting4" element={<Setting4 />} ></Route>
      <Route path="/Setting5" element={<Setting5 />} ></Route>
  
    </Routes>
  </div>
}
export default Content;