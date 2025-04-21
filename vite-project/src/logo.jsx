import hin from'./assets/19.png'
import hin2 from'./assets/17.png'
import hin3 from'./assets/18.png'
import hin4 from'./assets/20.png'
import hin5 from'./assets/21.png'
function Logo() {
    
    return(
        <>
            <div className="text-center  text-[#00005C] mt-18 mb-5 text-3xl font-[newsreader]">Our Partners</div>
             <div className=" flex flex-wrap justify-center gap-20">
                <img src={hin} alt="logo" />
                <img src={hin2} alt="logo" />
                <img src={hin3} alt="logo" />
                <img src={hin4} alt="logo" />
                <img src={hin5} alt="logo" />


             </div>
              
            </>

    );
            
};
export default Logo