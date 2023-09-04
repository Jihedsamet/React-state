import Image from "../Image/Image";
import Name from "../Name/Name";
import Profesion from "../Profesion/Profesion";

function Person ({nom,img,profesion}) {
return(
<>
<Name nom={nom}/>
<Profesion profesion={profesion}/>
<Image img={img}/>
</>

);
}
export default Person;

