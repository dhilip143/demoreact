import './App.css'
import Dhilip from './dhilip'
import Avalable from './avalable'
import had from './assets/vr.png'
import had1 from './assets/scopik 32.png'
import had2 from './assets/scop[ik 43.png'
import had3 from './assets/scopik 34.png'  
import Logo from './logo'
import Blogs from './blogs'
import Student from './student'


function App() {
  

  return (
    <>
      <Dhilip/>
      <div className=" flex  justify-center gap-[10px] ml-  overflow -hidden ">
      <Avalable image={had} han="Course Name" hin="Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples"/>
      <Avalable image={had1} han="Course Name" hin="Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples" />
      </div>
      {/* <div className='flex  justify-center gap-[20px]  mt-20 ml-40  overflow-hidden' > */}
      <div className=" flex  justify-center gap-[20px] ml-  overflow -hidden mt-20 ">
      <Avalable image={had2} han="Course Name" hin="Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples" />
      <Avalable image={had3} han="Course Name" hin="Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples" />
     
      </div>
      <Logo/>
      <Blogs/>
      <Student/>

     </>
  )
}

export default App
