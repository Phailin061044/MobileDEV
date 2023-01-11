
import Post from "./Post"
import Comment from "./Comment"
import Card from "./Card"
import Navber from "./Navbar"

function App() {
  return (
    <div>  
      <Navber />
      <br></br>
      <Post userId="Dek_SE" message="Yeah, I got a grade A in Mobile Programming.">
        <Comment userId="Phailin_se" message="Wow, it's verygood"/>
        <Comment userId="Jif_se" message="Congratulation!!!!"/>
      </Post>
      <br></br>
      <Card />

    

    </div>
  );
}

export default App;
