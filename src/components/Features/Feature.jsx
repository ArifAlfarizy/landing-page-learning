import Billboard from "../Last-section/Images/Billboard"
import Benefit from "./Benefit"
import TeamGrow from "./TeamGrow"

export const Feature = () => {
  return (
    <div className=" px sm:px md:px lg:px-1 xl:px-25 2xl:px-35 mt-40 sm:mx-0">
      <TeamGrow />
      <Benefit 
      title="Manage the hiring process from beginning to end"
      detail="Polymer's built with productivity at heart and is loaded with features to help you hire more effectively. It's quick to learn, fast to navigate, and empowering to use."
      url="chat-feature.webp"
      />
      <Benefit 
      title="Keep track of everything"
      detail="A robust notification system ensures you'll never miss a thing. You'll have a clear overview of everything that happens within your hiring teams."
      url="notifications-feature.webp"
      display="none" />
      <Benefit 
      title="Work together"
      detail="Polymer is set up to allow everyone on your team to contribute to the hiring effort. With features like user roles and job assignments, you can easily divvy up the work and get everyone involved."
      url="team-feature.webp"
      display="none"
      />
    </div>
  )
}
