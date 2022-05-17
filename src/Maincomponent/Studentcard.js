import React from 'react'

function Studentcard(props) {
     const { title,  imge } = props;
  return (
    <>
      <div className="card px-5 p-3  rounded main__cards__color ">
        <div class=" ">
          <img src={imge} alt="" height={100} />
        </div>
        <div class="">
          <p class=" font_size  main__cards__color   ">{title} </p>
          {/* <p class="card-title font_size  main__cards__color ">{subtitle} </p> */}
        </div>
      </div>
    </>
  );
}

export default Studentcard