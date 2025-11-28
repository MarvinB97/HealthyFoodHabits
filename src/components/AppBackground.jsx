import { Button, Image } from "react-bootstrap";
import {hatcheft} from "../assets/icons/hat_chef.png";
import {fruits} from "../assets/icons/fruits.png";

const AppBackground = ({show})=>{
    return(
        <div className="principalContainer">
            {
                show?
                <>
                    <Image className="image-icon" src={hatcheft}/>
                    <h4 className="AppTitle">Healthy Food Habits</h4>
                </>
                :
                <></>
            }
            
            <Image className="image-background" src={fruits}/>
        </div>
    );
}

export default AppBackground;