"use client";

const DislikeButton = ({blogSlug} : {blogSlug : string}) => {
  return (
    <button onClick={()=>{
        console.log("Dislike button")
    }} >Dislike Button{blogSlug}</button>
  )
}

export default DislikeButton