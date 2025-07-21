import Skils from "./(client)/blog/page";
import Blog2 from "./(client)/blogs/page";
import Category from "./(client)/category/page";
import Course from "./(client)/courses/page";
import Explore from "./(client)/explore/page";
import Feedback from "./(client)/feedbacks/page";
import HomePage from "./(client)/home/page";
import Instructor from "./(client)/instructors/page";
import Summary from "./(client)/summary/page";

export default function Home(){
  return(
    <div className="mx-16 my-5">
      <HomePage/>
      <Category/>
      <Course/>
      <Instructor/>
      <Summary/>
      <Skils/>
      <Explore/>
      <Feedback/>
      <Blog2/>
    </div>
  )
}