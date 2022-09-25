import React, { useEffect, useState } from "react";
import php from "../assets/php.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import txt from "../assets/text.png";
import md from "../assets/md.png";
import yml from "../assets/yml.png";
import swift from "../assets/swift.png";
import json from "../assets/json.png";
import GistService from "../services"
import { ClipLoader } from "react-spinners";

const icons = {
  php,
  html,
  css,
  js,
  txt,
  md,
  swift,
  json,
  yml
};



function Gist({ gist }) {
    const [forkList, setForkList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fecthData=async()=>{

        let {data}=await GistService.getForkList(gist.forks_url)
        setForkList(data)
        console.log(data,"FORK LIST")
    }
    useEffect(() => {
        setIsLoading(true)
        fecthData().then(x=>{
            isLoading(false)
        })
    }, [])
    
  return (
    <div key={gist.id} className="flex flex-col rounded-2xl bg-white shadow-xl mb-8">
      <div className="relative flex-1 py-1 px-6  pb-4 md:px-8">
      
        {Object.keys(gist.files).map((x) => {
          return (
            //  <span className="mt-4 text-base text-gray-500">{x.slice(x.lastIndexOf('.') + 1,x.length)}</span>
           
            <span class="inline-flex items-center  py-1 mr-2  rounded-full text-sm font-semibold text-gray-600">
              <img
                className="h-4 w-4 mr-2"
                src={icons[x.slice(x.lastIndexOf(".") + 1, x.length)]}
                alt=""
              />{" "}
              {x.slice(x.lastIndexOf(".") + 1, x.length)}
            </span>
          );
        })}
      </div>
      <div className="relative flex-1 py-1 px-6  pb-4 md:px-8">
      <h1 className="text-lg">Fork List</h1>
      
        {!isLoading ? forkList.length>0? forkList.map((x) => {
          return (
            //  <span className="mt-4 text-base text-gray-500">{x.slice(x.lastIndexOf('.') + 1,x.length)}</span>
           
            <span class="inline-flex items-center m-2 px-2 py-1  rounded-full text-sm font-semibold text-gray-600">
              <img
                className="h-8 w-8 mr-2"
                src={x.owner.avatar_url}
                alt=""
              />{" "}
             
            </span>
          );
        }):
        <span>No Forks</span>:
        <ClipLoader color={"#60A5FA"} loading={isLoading}  size={50} />
    
    }
      </div>
    </div>
  );
}

export default Gist;
