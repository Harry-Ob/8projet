import bg_img from "./assets/img/image2.jpeg" ;
// function t(){
  
//   // <Collapsible/> 
//   return (
    
//   <h2>About Page</h2>
//   )
// }

function About() {
    return (
              <div className="rounded-xl border-2 border-blue-500 overflow-hidden  ">
                {/* w-[335px] h-[111px] */}
                {/* tricks with absolute and relative to make sure ur text stays in the middle no matter what  */}
                <div  className="relative 
                sm:h-48 sm:w-full
                md:h-56   md:mx-auto md:w-full
                lg:h-56 
                flex items-center justify-center
                bg-cover bg-center 
                before:absolute before:inset-0 before:bg-black/60 before:mix-blend-darken 
                h-[111px]"
                // lg:max-w-7xl  md:container => width and height to make sure it fits and everything is fine. 
                style={{
                  backgroundImage: `url(${bg_img})`, // Change this!
                }}>
                {/* <h2 className="relative z-10 w-full 
                pb-[50px] pt-[50px]
                text-2xl font-bold 
                mb-6 mt-6 
                 px-4">
              Chez vous, partout et ailleurs
            </h2> */}
      
                </div>
              </div>
    )
  }

  export default About;
